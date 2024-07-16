import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useCartStore } from "../store/cart";

interface RequireConfirmOrderProps {
  children: ReactNode;
}

const RequireConfirmOrder: React.FC<RequireConfirmOrderProps> = ({ children }) => {
  const { isConfirmedOrder } = useCartStore();
  // console.log(token);
  const location = useLocation();
  if (isConfirmedOrder === false) {
    return <Navigate to="/cart" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
export default RequireConfirmOrder;
