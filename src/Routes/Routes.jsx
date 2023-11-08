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
        path: '/all-books',
        element: <AllBooks></AllBooks>,
      },

      {
        path: '/books/:genre',
        element: <Books></Books>,
        loader: () => fetch('http://localhost:5000/books'),
      },

      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: '/update/:id',
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.id}`),
      },
    ],
  },
]);

export default Router;
