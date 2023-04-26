import { useState, createContext } from 'react';
import axios from 'axios';
import clienteAxios from "../config/clienteAxios";

const ClienteContext = createContext();

const ClienteProvider = ({children}) => {

  const [ resultado, setResultado ] = useState({});

  const consultarClientes = async () => {
    try {
      const { data } = await clienteAxios('/clientes');      
      setResultado(data);
    } catch (error) {
      setResultado({});
      console.log(error.response);      
    }
  }

  return (
    <ClienteContext.Provider
      value={{
        resultado,
        consultarClientes
      }}
    >
      {children}
    </ClienteContext.Provider>
  )
}

export {
  ClienteProvider
}

export default ClienteContext;