import { useState, useEffect } from "react";
import { useLoaderData, Link } from 'react-router-dom';
import { obtenerMovimientosCliente } from "../data/Movimientos";
import Movimiento from "../components/Movimiento";

export function loader({params}) {
  const { id } = params;
  const movimientos = obtenerMovimientosCliente(id);
  return movimientos;
}

const Movimientos = () => {
  const movimientos = useLoaderData();
  console.log(movimientos)
  
  const [ total, setTotal ] = useState([]);
  const [ cliente, setCliente ] = useState('');

  useEffect(()=> {
    if(movimientos.lenght > 0) {
      const calculoTotal = movimientos.reduce((total, movimiento) => total + Number(movimiento.importe), 0).toFixed(2);
      setTotal(calculoTotal);
      setCliente(movimientos[0].cliente.nombre);
    }
  },[movimientos]);

  return (
    <>
      <nav>
        <Link
          to="/"
        >
          Inicio
        </Link>
      </nav> 
      <div>
      {movimientos?.length > 0 ? (
          movimientos[0] === 'Ha ocurrido un error' ? 
          'Ha ocurrido un error' : 
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
          <Movimiento
            movimientos={movimientos}
          />
          </tbody>
          <tfoot>
            <tr>
              <th colSpan='2' className="tabla-importe">SALDO</th>
              <th className="tabla-importe">{total}</th>
            </tr>
          </tfoot>
        </table>
        ) : 'No hay movimientos registrados'}
      </div>
    </>
  )
}

export default Movimientos;