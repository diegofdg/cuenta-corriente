import { useEffect } from "react";
import useCliente from "../hooks/useCliente";

const Formulario = () => {
  const { consultarClientes } = useCliente();

  useEffect(()=>{
    consultarClientes();
  },[])
  
  
  return (
    <>
    {/* <p>Aca tengo que poner los botones para las acciones de mostrar clientes, facturas, etc.</p> */}
    </>
  )
}

export default Formulario;