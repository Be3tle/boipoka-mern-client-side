import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Navbar/Navbar';

const Layout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
