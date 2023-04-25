import { useContext } from "react";
import MovimientoContext from "../context/MovimientoProvider";

const useMovimiento = () => {
  return useContext(MovimientoContext);
}

export default useMovimiento;