import { Link } from 'react-router-dom';

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
              to={`/clientes/${cliente.id}/editar`}
            >
              Editar Cliente
            </Link>
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
          </td>
        </tr>
      ))}
    </>
  )
}

export default Cliente;