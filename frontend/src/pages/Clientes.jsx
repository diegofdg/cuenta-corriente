import { contarClientes, obtenerClientes } from '../data/Clientes';
import { useLoaderData, Link, redirect, useParams } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { useEffect, useState } from 'react';

export function loader() {
  const clientes = obtenerClientes();
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
  },[]);

  useEffect(()=> {
    setPagina(Number(params?.pagina));
  },[]);

  useEffect(()=> {
    mostrarClientesPagina();
  },[pagina]);

  const mostrarClientesPagina = () => {
    const comienzo = (pagina - 1) * 5 || 0;
    const fin = comienzo + 5;
    const lista = [];
    for (let i = comienzo; i < fin; i++) {
      if(clientes[i]) {
        lista.push(clientes[i]);
      }
    }
    setClientesFiltrados(lista);
  }

  const contarPaginas = async () => {
    const totalPaginas = await contarClientes();
    return totalPaginas;
  }

  const handleChangeTexto = (e) => {
    if(e.target.value.trim() != ''){
      setTexto(e.target.value);
    } else {
      setTexto('');
      mostrarClientesPagina();
    }
  }

  const handleChangeBusqueda = () => {
    if(Number(texto)) {
      const clientesFiltrados = clientes.filter(cliente => cliente.id == texto);
      setClientesFiltrados(clientesFiltrados);
    } else if(texto.length > 3) {
      const clientesFiltrados = clientes.filter(cliente => cliente.nombre.search(texto.toUpperCase()) != -1);
      setClientesFiltrados(clientesFiltrados);
    } else {
      alert('Para buscar ingresa más de tres caracteres o un número de cliente')

    }
  }
 
  return (
    <>
      <div>
        <label htmlFor="caja-busqueda">
          Nombre o Id del Cliente:
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
                  setClientes={setClientesFiltrados}
                />
              </tbody>
            </table>
          </>
        ) : 'No existen registros para mostrar'}
      </div>
      <br /><br />
        <Link
          to={`/clientes/agregar`}
        >
          <button type="button">
            Agregar Cliente
          </button>
        </Link>
      <br /><br />
      <div>
        <p>Página {pagina} de {Math.ceil(cantidadClientes/5)} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {pagina < Math.ceil(cantidadClientes/5) ? (
          <a href={`/clientes/pagina/${pagina+1}`}>
            <button type="button">
              Página siguiente
            </button>
          </a>
        ) : (
          <a href={`/clientes/pagina/${pagina-1}`}>
            <button type="button">
              Página anterior
            </button>
          </a>
        )}
        </p>
      </div>
    </>
  )
}

export default Clientes;