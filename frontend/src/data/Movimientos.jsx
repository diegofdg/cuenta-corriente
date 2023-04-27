import clienteAxios from "../config/clienteAxios";

export async function obtenerMovimientos() {
  try {
    const { data } = await clienteAxios('/movimientos');
    return data;
  } catch (error) {
    console.error(error);
    return(['Ha ocurrido un error']);
  }
}


export async function obtenerMovimientosCliente(id) {
  try {
    const { data } = await clienteAxios(`/movimientos/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    return(['Ha ocurrido un error']);
  }
}