import { obtenerClientes } from '../data/Clientes';
import { useLoaderData, Link } from 'react-router-dom';
import Cliente from '../components/Cliente';

export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

const Clientes = () => {
  const clientes = useLoaderData();
  console.log(clientes)
 
  return (
    <>
      <nav>
        <Link
          to="/movimientos"
        >
          Movimientos
        </Link>
      </nav>
      <div>
        {clientes?.length > 0 ? (
          clientes[0] === 'Ha ocurrido un error' ? 
          'Ha ocurrido un error' : 
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOMBRE</th>
                <th>CUIL</th>
                <th>TELEFONO</th>
                <th>EMAIL</th>
                <th>CONDICION</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              <Cliente
                clientes={clientes}
              />
            </tbody>
          </table>
        ) : 'No hay clientes registrados'}
      </div>
    </>
  )
}

export default Clientes;