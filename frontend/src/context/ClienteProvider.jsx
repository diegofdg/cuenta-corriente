import { useState, createContext } from 'react';
import axios from 'axios';

const ClienteContext = createContext();

const ClienteProvider = ({children}) => {

  const [ resultado, setResultado ] = useState({});

  const consultarClientes = async () => {
    try {
      const url = `http://localhost:4000/api/clientes`;      
      const { data } = await axios(url);

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