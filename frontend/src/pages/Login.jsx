import { Form, Link, useActionData, redirect, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const errores = useActionData();
  return (
    <>
      <h1>Inicia Sesión</h1>
      <div>
        {errores?.length ? <Error>{errores}</Error> : ''}
        <Form
          method="POST"
        >
          <FormularioLogin />
          <input
            type="submit"
            value="Iniciar Sesión"
          />
        </Form>
      </div>
      
    </>
  )
}

export default Login;