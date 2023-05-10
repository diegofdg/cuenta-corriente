import { obtenerClientes, obtenerClientesPorPagina } from '../data/Clientes';
import { useLoaderData, Link, redirect, useParams } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { useEffect, useState } from 'react';

export function loader({params}) {
  let { pagina } = params;
  const clientes = obtenerClientesPorPagina(pagina);
  return clientes;
}

const Clientes = () => {
  const clientes = useLoaderData();
  const params = useParams();
  const [ texto, setTexto ] = useState('');
  const [ clientesFiltrados, setClientesFiltrados ] = useState([]);
  const [ pagina, setPagina ] = useState(1);
  const [ cantidadClientes, setCantidadClientes ] = useState(0);


  useEffect( ()=> {
    contarPaginas().then(cantidad => { setCantidadClientes(cantidad); });
    setClientesFiltrados(clientes);
  },[]);


  useEffect(()=> {
    setPagina(Number(params?.pagina));
  },[]);

  const contarPaginas = async () => {
    const totalPaginas = await obtenerClientes();
    return totalPaginas;
  }

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
        <br />
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
      <div>
        <p>Página {pagina} de {Math.floor(cantidadClientes/5)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {pagina < Math.floor(cantidadClientes/5) ? (
          <a href={`/clientes/pagina/${pagina+1}`}>Página siguiente</a>        
        ) : (
          <a href={`/clientes/pagina/${pagina-1}`}>Página anterior</a>        
        )}
        </p>
      </div>
    </>
  )
}

export default Clientes;