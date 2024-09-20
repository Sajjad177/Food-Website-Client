import { useUserStore } from "@/store/useUserStore";
import { Navigate } from "react-router-dom";

const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useUserStore();
  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AuthenticatedUser;



// import { useUserStore } from "@/store/useUserStore";
// import { Navigate } from "react-router-dom";

// const AuthenticatedUser = ({ children }: { children: React.ReactNode }) => {
//   const { isAuthenticated, user } = useUserStore();

//   // If the user is not authenticated, redirect to the login page
//   if (!isAuthenticated) {
//     return <Navigate to={"/login"} replace />;
//   }

//   // If the user is authenticated but not verified, allow access to the children (e.g., login page)
//   if (isAuthenticated && user?.isVerified) {
//     return <Navigate to={"/"} replace />;
//   }

//   // If user is authenticated but not verified or some other condition, show children
//   return children;
// };

// export default AuthenticatedUser;
