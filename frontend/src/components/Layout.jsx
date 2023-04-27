import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>LOGO DE LA EMPRESA</h1>
        <Outlet />
    </div>
  );
}

export default Layout;