const Movimiento = ({movimientos}) => {
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
        </tr>
      ))}
    </>
  )
}

export default Movimiento;