import Formulario from "./Formulario";
import useMovimiento from "../hooks/useMovimiento";
import Movimiento from "../pages/Movimientos";

const AppCliente = () => {
  const { movimientos } = useMovimiento();

  return (
    <>
      <main>
        <Formulario />
        {movimientos.length > 0 && <Movimiento />}
      </main>
    </>
  )
}

export default AppCliente;