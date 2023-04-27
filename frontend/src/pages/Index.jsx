import { Link, Form, useActionData } from 'react-router-dom';

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  console.log(datos)
  
  // Validación
  const errores = [];
  if(Object.values(datos).includes('')) {
    errores.push('Todos los campos son obligatorios');
  }

  // Retornar datos si hay errores
  if(Object.keys(errores).length) {
    return errores;
  }

  //await agregarCliente(datos);
  console.log('Paso la validacion')
  return null;
}

function Index() {
  const errores = useActionData();
  console.log(errores);

  const handleBuscarCliente = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <>
      <nav>
          <Link
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            to="/movimientos"
          >
            Movimientos
          </Link>
      </nav>
      {/* <br /><br />
      <div>
        <label>Id cliente</label>
        <input type="number" name='id' />
        <label>Nombre cliente</label>
        <input type="text" name='nombre' />
        <button onClick={handleBuscarCliente}>Buscar Cliente</button>
      </div>
      
      <Form method="POST">
        <div>
          <label>
            Id cliente
          </label>
          <input type="number" name='id' />
          <label>
            Nombre Cliente
          </label>
          <input type="number" name='nombre' />
        </div>
        <div>
          <label>
            Desde
          </label>
          <input type="date" name='desde'/>
        </div>
        <div>
          <label>
            Hasta
          </label>
          <input type="date" name='hasta'/>
        </div>
        <div>
          <input type="submit" value="Consultar Deuda"
          />
        </div>
      </Form> */}
    </>
  )
}
  
export default Index;