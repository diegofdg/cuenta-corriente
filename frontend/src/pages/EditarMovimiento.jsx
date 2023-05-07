import { Form, useLoaderData, useActionData, redirect } from 'react-router-dom';
import Formulario from '../components/FormularioMovimientos';
import { obtenerMovimiento, editarMovimiento } from '../data/Movimientos';
import Error from '../components/Error';

export function loader({params}) {
  const { id } = params;
  const movimiento = obtenerMovimiento(id);
  return movimiento;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  // Validación
  const errores = [];
  if (Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }

  // Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  await editarMovimiento(params.id, datos);
  console.log(datos)
  return redirect(`/movimientos/${datos.clienteId}/consulta`);
}

const EditarMovimiento = () => {
  const movimiento = useLoaderData();
  const errores = useActionData();
  console.log(movimiento)
  return (
    <>
      {errores?.length ? <Error>{errores}</Error> : ''}
      <Form
        method="POST"
      >
        <Formulario
          movimiento={movimiento}
        />
        <input
          type="submit"
          value="Guardar Cambios"
        />
      </Form>
    </>
  )
}

export default EditarMovimiento;