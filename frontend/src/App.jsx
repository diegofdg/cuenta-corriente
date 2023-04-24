import { ClienteProvider } from "./context/ClienteProvider";
import AppCliente from "./components/AppCliente";

function App() {
  return (
    <ClienteProvider>
      <header>
        <h1>Cuenta Corriente con React</h1>
      </header>
      <AppCliente />
    </ClienteProvider>
  )
}

export default App;