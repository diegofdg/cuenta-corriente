import { obtenerClientes } from '../data/Clientes';
import { useLoaderData, Link } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { useEffect, useState } from 'react';

export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

const Clientes = () => {
  const clientes = useLoaderData();
  const [ texto, setTexto ] = useState('');
  const [ clientesFiltrados, setClientesFiltrados ] = useState([]);

  useEffect(()=> {
    setClientesFiltrados(clientes);
  },[]);

  const handleChangeTexto = (e) => {
    if(e.target.value.trim() != ''){
      setTexto(e.target.value);
      const clientesFiltrados = clientes.filter(cliente => cliente.nombre.search(texto.toUpperCase()) != -1);
      setClientesFiltrados(clientesFiltrados);
    } else {
      setTexto('');
      setClientesFiltrados(clientes);
    }    
  }

  const handleChangeBusqueda = () => {
    const clientesFiltrados = clientes.filter(cliente => cliente.nombre.search(texto.toUpperCase()) != -1);
    setClientesFiltrados(clientesFiltrados);
  }
 
  return (
    <>
      <div>
        <label htmlFor="caja-busqueda">
          Nombre Cliente:
        </label>
        <input
          id="caja-busqueda"
          type="text"
          onChange={handleChangeTexto}
          value={texto}
          />
        <button
          onClick={handleChangeBusqueda}
        >Buscar</button>
        {clientesFiltrados?.length > 0 ? (
          clientesFiltrados[0] === 'Ha ocurrido un error' ? 
          'Ha ocurrido un error' : 
          <>
            <table>
              <caption>LISTADO DE CLIENTES</caption>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>CUIL</th>
                  <th>TELEFONO</th>
                  <th>EMAIL</th>
                  <th>CONDICION</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <Cliente
                  clientes={clientesFiltrados}
                />
              </tbody>
            </table>
          </>
        ) : 'No hay clientes registrados'}
      </div>
      <br /><br />
        <Link
          to={`/clientes/agregar`}
        >
          Agregar Cliente
        </Link>
      <br /><br />
      <div>Página 1 de 1</div>
    </>
  )
}

export default Clientes;