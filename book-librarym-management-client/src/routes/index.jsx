import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import AllBook from "../pages/AllBook";
import AddBook from "../pages/AddBook";
import BorrowedBook from "../pages/BorrowedBook";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import BooksCategory from "../pages/BooksCategory";
import ViewDetails from "../pages/ViewDetails";
import UpdateBook from "../pages/UpdateBook";
import ReadBook from "../pages/ReadBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5173/books"),
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/allBook",
        element: (
          <PrivateRoute>
            <AllBook />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5173/allBooks"),
      },
      {
        path: "/updateBook/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/allBooks/update/${params.id}`),
      },
      {
        path: "/borrowedBook",
        element: (
          <PrivateRoute>
            {" "}
            <BorrowedBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/booksCategory/:category",
        element: (
          <PrivateRoute>
            <BooksCategory></BooksCategory>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/allBooks/${params.category}`),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/allBooks/books/${params.id}`),
      },
      {
        path: "/readBook/:id",
        element: (
          <PrivateRoute>
            {" "}
            <ReadBook></ReadBook>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5173/allBooks/readBook/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
