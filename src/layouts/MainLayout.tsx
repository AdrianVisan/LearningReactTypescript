import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function MainLayout() {
  return (
    <>
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayout;
