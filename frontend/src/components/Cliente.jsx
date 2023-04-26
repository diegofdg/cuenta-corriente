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
        </tr>        
      ))}
    </>
  )
}

export default Cliente;