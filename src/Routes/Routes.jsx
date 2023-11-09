import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Error from '../Pages/Error/Error';
import AddBook from '../Pages/AddBook/AddBook';
import Books from '../Pages/Books/Books';
import Details from '../Pages/Details/Details';
import AllBooks from '../Pages/AllBooks/AllBooks';
import UpdateBook from '../Pages/UpdateBook/UpdateBook';
import PrivateRoute from './PrivateRoute';
import Borrows from '../Pages/Borrows/Borrows';

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
        element: (
          <PrivateRoute>
            <AddBook></AddBook>,
          </PrivateRoute>
        ),
      },
      {
        path: '/all-books',
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>,
          </PrivateRoute>
        ),
      },

      {
        path: '/books/:genre',
        element: (
          <PrivateRoute>
            <Books></Books>
          </PrivateRoute>
        ),
        loader: () => fetch('https://boipoka-server.vercel.app/books'),
      },

      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://boipoka-server.vercel.app/books/${params.id}`),
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://boipoka-server.vercel.app/books/${params.id}`),
      },
      {
        path: '/borrowed-books',
        element: (
          <PrivateRoute>
            <Borrows></Borrows>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
