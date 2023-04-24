import useCliente from "../hooks/useCliente";

const Resultado = () => {
  const { resultado } = useCliente();
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CUIL</th>
            <th>TELEFONO</th>
            <th>EMAIL</th>
            <th>CONDICION</th>
          </tr>
        </thead>
        <tbody>
      
        {resultado?.map(cliente => (
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
        </tbody>
      </table>      
    </div>
  )
}

export default Resultado;