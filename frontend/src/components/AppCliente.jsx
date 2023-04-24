import Formulario from "./Formulario";
import Resultado from "./Resultado";
import useCliente from "../hooks/useCliente";

const AppCliente = () => {
  const { resultado } = useCliente();

  return (
    <>
      <main>
        <Formulario />
        {resultado.length > 0 && <Resultado />}
      </main>
    </>
  )
}

export default AppCliente;