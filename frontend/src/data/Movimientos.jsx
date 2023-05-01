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

export async function obtenerMovimientosCliente(clienteId) {
  try {
    const { data } = await clienteAxios(`/movimientos/${clienteId}`);
    return data;
  } catch (error) {
    console.error(error);
    return(['Ha ocurrido un error']);
  }
}

export async function agregarMovimiento(clienteId, datos) {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }
    const { data } = await clienteAxios.post(`/movimientos/${clienteId}`, datos, config);
    alert('Movimiento Agregado');
    return data;
  } catch (error) {
    console.log(error);
  }
}