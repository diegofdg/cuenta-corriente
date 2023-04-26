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