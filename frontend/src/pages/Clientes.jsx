import { contarClientes, obtenerClientes } from '../data/Clientes';
import { useLoaderData, Link, redirect, useParams } from 'react-router-dom';
import Cliente from '../components/Cliente';
import { useEffect, useState } from 'react';
import BotonPaginado from '../components/BotonPaginado';

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
  const [ paginando, setPaginando ] = useState(true);

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
      setPaginando(true);
      mostrarClientesPagina();
    }
  }

  const handleChangeBusqueda = () => {
    if(Number(texto)) {
      const clientesFiltrados = clientes.filter(cliente => cliente.id == texto);
      setClientesFiltrados(clientesFiltrados);
      setPaginando(false);
    } else if(texto.length > 3) {
      const clientesFiltrados = clientes.filter(cliente => cliente.nombre.search(texto.toUpperCase()) != -1);
      setClientesFiltrados(clientesFiltrados);
      setPaginando(false);
    } else {
      alert('Para buscar ingresa más de tres caracteres o un número de cliente');
      paginando(true);
    }
  }
 
  return (
    <>
      <div>
        <div class="row g-3 align-items-center">
          <div class="col-auto">
            <label for="caja-busqueda" class="col-form-label">Nombre o Id del Cliente:</label>
          </div>
          <div class="col-auto">
            <input
              type="text"
              id="caja-busqueda"
              class="form-control"
              onChange={handleChangeTexto}
              value={texto}
            />
          </div>
          <div class="col-auto">
            <button
              class="btn btn-primary"
              type="button"
              onClick={handleChangeBusqueda}
            >
              Button
            </button>
          </div>
        </div>        
        <br />
        {clientesFiltrados?.length > 0 ? (
          clientesFiltrados[0] === 'Ha ocurrido un error' ? 
          'Ha ocurrido un error' : 
          <>
            <table className='table table-striped mt-3 caption-top'>
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
      <br />
        <Link
          to={`/clientes/agregar`}
        >
          <button
            type="button"
            class="btn btn-primary"
          >
            Agregar Cliente
          </button>
        </Link>
      <br /><br />
      {paginando &&       
        <div>
          <p>
            {pagina <= Math.ceil(cantidadClientes/5) && pagina > 1 && 
              <BotonPaginado
                tipo={'Anterior'}
                pagina={pagina-1}
              />
            }
            <span className={pagina <= Math.ceil(cantidadClientes/5) && pagina > 1 ? 'm-3' : 'm-3 ms-0'}>
              Página {pagina} de {Math.ceil(cantidadClientes/5)}
            </span>
            {pagina < Math.ceil(cantidadClientes/5) &&
              <BotonPaginado
                tipo={'Siguiente'}
                pagina={pagina+1}
              />
            }
          </p>
        </div>
      }
    </>
  )
}

export default Clientes;