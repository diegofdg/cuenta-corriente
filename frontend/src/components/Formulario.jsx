import { useEffect } from "react";
import useCliente from "../hooks/useCliente";
import useMovimiento from "../hooks/useMovimiento";

const Formulario = () => {
  //const { consultarClientes } = useCliente();
  const { consultarMovimientos } = useMovimiento();
  

  useEffect(()=>{
    //consultarClientes();
    consultarMovimientos();
  },[])
  
  
  return (
    <>
    {/* <p>Aca tengo que poner los botones para las acciones de mostrar clientes, facturas, etc.</p> */}
    </>
  )
}

export default Formulario;