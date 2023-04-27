import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Layout from './components/Layout.jsx';
import Index, { action as indexAction} from './pages/Index.jsx';
import Cliente, { loader as clientesLoader } from './pages/Clientes.jsx';
import Movimiento , { loader as movimientosLoader }from './pages/Movimientos.jsx';
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
      /* {
        path: '/clientes',
        element: <Cliente />,
        loader: clientesLoader
      }, */
      {
        path: '/movimientos/:id',
        element: <Movimiento />,
        loader: movimientosLoader
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
