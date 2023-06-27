import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className='container'>
      <h1 className='fs-2 mb-3 mt-3 text-uppercase'>Sistema de Cuenta Corriente</h1>
        <Outlet />
    </div>
  );
}

export default Layout;