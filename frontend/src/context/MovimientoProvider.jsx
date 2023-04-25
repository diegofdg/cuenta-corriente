import { useState, createContext } from 'react';
import axios from 'axios';

const MovimientoContext = createContext();

const MovimientoProvider = ({children}) => {

  const [ movimientos, setMovimientos ] = useState({});

  const consultarMovimientos = async () => {
    try {
      const url = `http://localhost:4000/api/movimientos`;      
      const { data } = await axios(url);

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