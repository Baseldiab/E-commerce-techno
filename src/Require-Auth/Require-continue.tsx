import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useCartStore } from "../store/cart";

interface RequireContinueShoppingProps {
  children: ReactNode;
}

const RequireContinueShopping: React.FC<RequireContinueShoppingProps> = ({ children }) => {
  const { isContinuing } = useCartStore();
  // console.log(token);
  const location = useLocation();
  if (isContinuing === false) {
    return <Navigate to="/cart" state={{ path: location.pathname }} />;
  }
  return <>{children}</>;
};
export default RequireContinueShopping;
