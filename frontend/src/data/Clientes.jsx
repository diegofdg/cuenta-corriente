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