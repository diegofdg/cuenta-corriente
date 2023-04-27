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
  const [ total, setTotal ] = useState([]);
  const [ cliente, setCliente ] = useState('');

  useEffect(()=> {
    const calculoTotal = movimientos.reduce((total, movimiento) => total + Number(movimiento.importe), 0).toFixed(2) || 0;
    setTotal(calculoTotal);
    if(movimientos.length > 0) {
      setCliente(movimientos[0].cliente.nombre);
    }
  },[]);

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
            <caption>DETALLE DE: <strong>{cliente.toUpperCase()}</strong></caption>
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
      <br /><br />
      <div>Página 1 de 1</div>
    </>
  )
}

export default Movimientos;