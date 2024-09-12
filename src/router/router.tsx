import AddMenu from "@/admin/AddMenu/AddMenu";
import Orders from "@/admin/Orders/Orders";
import Restaurant from "@/admin/Restaurant/Restaurant";
import ForgotPassword from "@/auth/ForgotPassword";
import Login from "@/auth/Login";
import ResetPassword from "@/auth/ResetPassword";
import SignUp from "@/auth/SignUp";
import VerifyEmail from "@/auth/VerifyEmail";
import Cart from "@/components/Cart/Cart";
import HeroSection from "@/components/HeroSection/HeroSection";
import Profile from "@/components/Profile/Profile";
import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails";
import SearchPage from "@/components/SearchPage/SearchPage";
import Root from "@/Root/Root";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search/:text",
        element: <SearchPage />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      //TODO : admin panel : ->
      {
        path: "/admin/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/admin/menu",
        element: <AddMenu />,
      },
      {
        path: "/admin/orders",
        element: <Orders />,
      },
    ],
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
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail />,
  },
]);

export default router;
