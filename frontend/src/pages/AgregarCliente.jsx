import { useNavigate, Form, useActionData, redirect } from 'react-router-dom';
import FormularioClientes from '../components/FormularioClientes';
import { agregarCliente } from '../data/Clientes';
import Error from '../components/Error';

export async function action({ request }) {
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

  await agregarCliente(datos);
  return redirect("/clientes/pagina/1");
}

function AgregarCliente() {
  const navigate = useNavigate();
  const errores = useActionData();

  return (
    <>
      <h1>Nuevo Cliente</h1>
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
          <FormularioClientes />
          <input
            type="submit"
            value="Registrar Cliente"
          />
        </Form>
      </div>
    </>
  )
}

export default AgregarCliente;