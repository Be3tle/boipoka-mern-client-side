import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Error from '../Pages/Error/Error';
import AddBook from '../Pages/AddBook/AddBook';
import Books from '../Pages/Books/Books';

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
      {
        path: '/add-book',
        element: <AddBook></AddBook>,
      },

      {
        path: '/books/:genre',
        element: <Books></Books>,
        loader: () => fetch('http://localhost:5000/books'),
      },
    ],
  },
]);

export default Router;
