import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Cliente, { loader as clientesLoader } from './pages/Clientes.jsx';
import Movimiento , { loader as movimientosLoader }from './pages/Movimientos.jsx';
import AgregarCliente, { action as agregarClienteAction} from './pages/AgregarCliente.jsx';
import AgregarMovimiento, { action as agregarMovimientoAction} from './pages/AgregarMovimiento.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Cliente />,
        loader: clientesLoader
      },
      {
        path: '/movimientos/:clienteId/consulta',
        element: <Movimiento />,
        loader: movimientosLoader
      },
      {
        path: '/clientes/agregar',
        element: <AgregarCliente />,
        action: agregarClienteAction
      },
      {
        path: '/movimientos/:clienteId/agregar',
        element: <AgregarMovimiento />,
        action: agregarMovimientoAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
