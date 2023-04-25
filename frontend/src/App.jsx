import { MovimientoProvider } from "./context/MovimientoProvider";
import AppCliente from "./components/AppCliente";

function App() {
  return (
    <MovimientoProvider>
      <header>
        <h1>Cuenta Corriente con React</h1>
      </header>
      <AppCliente />
    </MovimientoProvider>
  )
}

export default App;