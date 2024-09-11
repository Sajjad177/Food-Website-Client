import ForgotPassword from "@/auth/ForgotPassword";
import Login from "@/auth/Login";
import ResetPassword from "@/auth/ResetPassword";
import SignUp from "@/auth/SignUp";
import VerifyEmail from "@/auth/VerifyEmail";
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
