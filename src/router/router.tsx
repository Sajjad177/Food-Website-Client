import AddMenu from "@/admin/AddMenu/AddMenu";
import Orders from "@/admin/Orders/Orders";
import Restaurant from "@/admin/Restaurant/Restaurant";
import ForgotPassword from "@/auth/ForgotPassword";
import Login from "@/auth/Login";
import ResetPassword from "@/auth/ResetPassword";
import SignUp from "@/auth/SignUp";
import VerifyEmail from "@/auth/VerifyEmail";
// import BannerSection from "@/components/BannerSection/BannerSection";
import Cart from "@/components/Cart/Cart";
import HeroSection from "@/components/HeroSection/HeroSection";
import OrderSuccess from "@/components/OrderSuccess/OrderSuccess";
import Profile from "@/components/Profile/Profile";
import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails";
import SearchPage from "@/components/SearchPage/SearchPage";
import Root from "@/Root/Root";
import { createBrowserRouter } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import AuthenticatedUser from "./AuthenticatedUser";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Root />
      </PrivateRouter>
    ),
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
      // {
      //   path:"/",
      //   element:<BannerSection/>
      // },
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
      {
        path: "/order/status",
        element: <OrderSuccess />,
      },
      //TODO : admin panel : ->
      {
        path: "/admin/restaurant",
        element: (
          <AdminRoute>
            <Restaurant />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/menu",
        element: (
          <AdminRoute>
            <AddMenu />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/orders",
        element: (
          <AdminRoute>
            <Orders />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthenticatedUser>
        <Login />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/signUp",
    element: (
      <AuthenticatedUser>
        <SignUp />
      </AuthenticatedUser>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <AuthenticatedUser>
        <ForgotPassword />
      </AuthenticatedUser>
    ),
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
