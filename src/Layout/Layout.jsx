import { Outlet } from 'react-router-dom';
import Nav2 from '../Components/Navbar/Nav2';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Nav2></Nav2>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
