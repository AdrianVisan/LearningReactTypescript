import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from '../components/NavBar';

function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default MainLayout;
