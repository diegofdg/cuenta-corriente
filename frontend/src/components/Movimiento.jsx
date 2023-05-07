import { Link, useParams } from 'react-router-dom';

const Movimiento = ({movimientos}) => {
  const params = useParams();

  return (
    <>
      {movimientos?.map(movimiento => (
        <tr key={movimiento.id}>
          <td>
            {movimiento.fecha}
          </td>
          <td>
            {movimiento.detalle}
          </td>
          <td className="tabla-importe">
            {movimiento.importe}
          </td>
          <td>
            <Link
              to={`/movimientos/${movimiento.id}/editar`}
            >
              <button type="button">
                Editar Movimiento
              </button>
            </Link>
          </td>
        </tr>
      ))}
    </>
  )
}

export default Movimiento;