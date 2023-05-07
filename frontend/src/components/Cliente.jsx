import { Link, Form } from 'react-router-dom';
import { eliminarCliente } from '../data/Clientes';

const Cliente = ({clientes}) => {

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
              Ver Deuda
            </Link>
            <Link
              to={`/movimientos/${cliente.id}/agregar`}
            >
              Agregar Movimiento
            </Link>
            <Link
                to={`/clientes/${cliente.id}/editar`}
              >
                Editar Cliente
            </Link>            
            <button 
              onClick={()=>{
                if(confirm('¿Deseas eliminar este registro?')) {
                  eliminarCliente(cliente.id)
                }
              }}                
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