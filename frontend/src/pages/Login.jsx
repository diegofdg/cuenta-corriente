import { Form, useActionData, redirect } from "react-router-dom";
import FormularioLogin from "../components/FormularioLogin";
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

  return redirect('/clientes/pagina/1');
}

const Login = () => {  
  const errores = useActionData();
  return (
    <>
      <h2 className="fs-3 mb-3">Inicia Sesión</h2>
      <div className="row">
        <div className="col col-sm-6 col-md-5 col-lg-4 col-xl-3">
          {errores?.length ? <Error>{errores}</Error> : ''}
          <Form
            method="POST"
          >
            <FormularioLogin />
            <button
              type="submit"
              className="btn btn-primary"
            >
              Iniciar Sesión
            </button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Login;