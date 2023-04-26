import { useState, createContext } from 'react';
import axios from 'axios';
import clienteAxios from "../config/clienteAxios";

const MovimientoContext = createContext();

const MovimientoProvider = ({children}) => {

  const [ movimientos, setMovimientos ] = useState({});

  const consultarMovimientos = async () => {
    try {
      const { data } = await clienteAxios('/movimientos');
      setMovimientos(data);
    } catch (error) {
      setMovimientos({});
      console.log(error.response);      
    }
  }

  return (
    <MovimientoContext.Provider
      value={{
        movimientos,
        consultarMovimientos
      }}
    >
      {children}
    </MovimientoContext.Provider>
  )
}

export {
  MovimientoProvider
}

export default MovimientoContext;