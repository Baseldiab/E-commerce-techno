import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAuthStore } from "../store/auth";

interface RequireAuthProps {
  children: ReactNode;
}

const RequireLogin: React.FC<RequireAuthProps> = ({ children }) => {
  const { token } = useAuthStore();
  // console.log(auth.isLogged);
  const location = useLocation();
  if (token !== "") {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
export default RequireLogin;
