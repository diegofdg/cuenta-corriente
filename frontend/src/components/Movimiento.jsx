import { useState, useEffect } from "react";
import useMovimiento from "../hooks/useMovimiento";

const Movimiento = () => {
  const { movimientos } = useMovimiento([]);
  const [ total, setTotal ] = useState([]);
  const [ cliente, setCliente ] = useState('');

  useEffect(()=> {
    const calculoTotal = movimientos.reduce((total, movimiento) => total + Number(movimiento.importe), 0).toFixed(2);
    setTotal(calculoTotal);
    setCliente(movimientos[0].cliente.nombre);
  },[movimientos]);

  return (
    <div>
      <table>
        <caption>DETALLE DEL CLIENTE <strong>{cliente.toUpperCase()}</strong></caption>
        <thead>
          <tr>
            <th>FECHA</th>
            <th>DETALLE</th>
            <th>IMPORTE</th>
          </tr>
        </thead>
        <tbody>
      
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
        </tbody>
        <tfoot>
          <tr>
            <th colSpan='2' className="tabla-importe">SALDO</th>
            <th className="tabla-importe">{total}</th>          
          </tr>
        </tfoot>
      </table>      
    </div>
  )
}

export default Movimiento;