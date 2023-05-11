import { Link } from 'react-router-dom';
import { eliminarCliente } from '../data/Clientes';

const Cliente = ({clientes, setClientes}) => {

  const handleEliminarCliente = (id) => {
    if(confirm('¿Deseas eliminar este registro?')) {
      eliminarCliente(id);
      const clientesActualizados = clientes.filter(cliente=>cliente.id != id);
      setClientes(clientesActualizados);
    }
  }

  return (
    <>
      {clientes?.map(cliente => (
        <tr key={cliente.id}>
          <td>
            {cliente.id}
          </td>
          <td>
            {cliente.nombre}
          </td>
          <td>
            {cliente.cuil}
          </td>
          <td>
            {cliente.telefono}
          </td>
          <td>
            {cliente.email}
          </td>
          <td>
            {cliente.condicion}
          </td>
          <td>
            <Link
              to={`/movimientos/${cliente.id}/consulta`}
            >
              <button type="button">
                Ver Deuda
              </button>
            </Link>
            <Link
              to={`/clientes/${cliente.id}/editar`}
            >
              <button type="button">
                Editar Cliente
              </button>
            </Link>            
            <button 
              onClick={()=>handleEliminarCliente(cliente.id)}                
            >
              Eliminar
            </button>
          </td>
        </tr>
      ))}
    </>
  )
}

export default Cliente;