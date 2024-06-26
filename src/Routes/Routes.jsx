import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import CheckOut from "../Pages/CheckOut";
import Bookimgs from "../Pages/Bookimgs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'checkout/:id',
        element: <PrivateRoute>
          <CheckOut></CheckOut>
        </PrivateRoute>,
          loader: ({ params }) => fetch(`https://car-doctor-server-beta-ebon.vercel.app/service/${params.id}`)
      },
      {
        path: '/bookings',
        element: <PrivateRoute>
          <Bookimgs></Bookimgs>
        </PrivateRoute>
      }
    ]
  },
]);

export default router;