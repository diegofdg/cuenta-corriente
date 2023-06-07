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
  return redirect('/clientes/pagina/1');
}

function AgregarMovimiento() {
  const navigate = useNavigate();
  const errores = useActionData();
  const params = useParams();

  return (
    <>
      <h1>Nuevo Movimiento</h1>
      <div>
        <button
          type='button'
          onClick={() => navigate(-1)}
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
            clienteId={params.clienteId}
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