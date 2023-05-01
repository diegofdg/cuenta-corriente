import { useNavigate, Form, useActionData, redirect, useParams } from 'react-router-dom';
import FormularioMovimientos from '../components/FormularioMovimientos';
import { agregarMovimiento } from '../data/Movimientos';
import Error from '../components/Error';

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

  await agregarMovimiento(params.clienteId, datos);
  return redirect('/');
}

function AgregarMovimiento() {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1>Nuevo Movimiento</h1>
      <div>
        <button
          type='button'
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>

      <div>
        {errores?.length ? <Error>{errores}</Error> : ''}
        <Form
          method="POST"
        >
          <FormularioMovimientos
          />
          <input
            type="submit"
            value="Registrar Movimiento"
          />
        </Form>
      </div>
    </>
  )
}

export default AgregarMovimiento;