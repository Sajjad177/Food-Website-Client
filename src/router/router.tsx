import ForgotPassword from "@/auth/ForgotPassword";
import Login from "@/auth/Login";
import SignUp from "@/auth/SignUp";
import Root from "@/Root/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // children: [
    //   {
    //     path : "/Login",
    //   },
    // ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/forgot-password",
    element:<ForgotPassword/>
  },
]);

export default router;
