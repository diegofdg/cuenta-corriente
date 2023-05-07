import clienteAxios from "../config/clienteAxios";

export async function obtenerClientes() {
  try {
    const { data } = await clienteAxios('/clientes');
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
  console.log(datos, clienteId);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const { data } = await clienteAxios.post(`/clientes/${clienteId}`, datos, config);
    console.log(data)
    alert('Cliente Editado');
    return data;
  } catch (error) {
    console.log(error.message);
  }
}