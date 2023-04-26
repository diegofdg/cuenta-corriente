import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      <nav>
          <Link
            to="/clientes"
          >
            Clientes
          </Link>
          <Link
            to="/movimientos"
          >
            Movimientos
          </Link>
      </nav>      
    </>
  )
}
  
export default Index;