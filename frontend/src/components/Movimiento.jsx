import { useState, useEffect } from "react";
import useMovimiento from "../hooks/useMovimiento";

const Movimiento = () => {
  const { movimientos } = useMovimiento([]);
  const [ total, setTotal ] = useState([]);

  useEffect(()=> {
    const calculoTotal = movimientos.reduce((total, movimiento) => total + Number(movimiento.importe), 0).toFixed(2);
    setTotal(calculoTotal)
  },[movimientos]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FECHA</th>
            <th>CLIENTE ID</th>
            <th>DETALLE</th>
            <th>IMPORTE</th>
          </tr>
        </thead>
        <tbody>
      
        {movimientos?.map(movimiento => (
          <tr key={movimiento.id}>
            <td className="tabla-id">
              {movimiento.id}
            </td>
            <td>
              {movimiento.fecha}
            </td>
            <td className="tabla-id">
              {movimiento.clienteId}
            </td>
            <td>
              {movimiento.detalle}
            </td>
            <td className="tabla-importe">
              {movimiento.importe}
            </td>            
          </tr>  
        ))}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan='4' className="tabla-importe">SALDO</th>
            <th className="tabla-importe">{total}</th>          
          </tr>
        </tfoot>
      </table>      
    </div>
  )
}

export default Movimiento;