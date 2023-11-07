import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Error from '../Pages/Error/Error';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
