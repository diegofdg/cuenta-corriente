import clienteAxios from "../config/clienteAxios";

export async function obtenerClientes() {
  try {
    const { data } = await clienteAxios('/clientes');
    return data[0].cantidad_clientes;
  } catch (error) {
    console.error(error);
    return(['Ha ocurrido un error']);
  }
}

export async function obtenerClientesPorPagina(pagina = 1) {
  try {
    const { data } = await clienteAxios(`/clientes/pagina/${pagina}`);
    console.log(data)
    return data;
  } catch (error) {
    console.error(error);
    return(['Ha ocurrido un error']);
  }
}

export async function agregarCliente(datos) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const { data } = await clienteAxios.post('/clientes', datos, config);
    alert('Cliente Agregado');
    return data
    
  } catch (error) {
    console.log(error);
  }
}

export async function obtenerCliente(clienteId) {
  try {
    const { data } = await clienteAxios(`/clientes/${clienteId}`);
    return data;
  } catch (error) {
    console.error(error);
    return(['Ha ocurrido un error']);
  }
}

export async function editarCliente(clienteId, datos) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const { data } = await clienteAxios.post(`/clientes/${clienteId}`, datos, config);
    alert('Cliente Editado');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function eliminarCliente(clienteId) {
  try {
    await clienteAxios.delete(`/clientes/${clienteId}`);
    alert('Cliente Eliminado');
    
  } catch (error) {
    console.log(error.message);
  }
}