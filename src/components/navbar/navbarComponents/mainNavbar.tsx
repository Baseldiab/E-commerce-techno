import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../../store/auth";
import { TbShoppingCartDiscount } from "react-icons/tb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishStore } from "../../../store/wish";
import { useCartStore } from "../../../store/cart";

export default function MainNavbar() {
  const location = useLocation();

  // STORE
  const { token, logout } = useAuthStore();
  const { wishList } = useWishStore();
  const { cartList } = useCartStore();
  console.log(wishList);
  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath: string) => {
    return location.pathname === linkPath;
  };
  return (
    <>
      <div className="bg-primary py-3 text-white">
        <div className="myContainer flex justify-between items-center">
          <Link to={"/"}>
            <img src="/images/Logo.svg" className="md:w-36 w-28 min-w-[28] md:h-auto" alt="" />
          </Link>
          <div className="flex justify-between items-center">
            {token === "" ? (
              <Link
                to={"login"}
                className={`md:mx-3 mx-2 md:text-md text-sm py-1 uppercase font-medium text-white hover:text-slate-300`}
              >
                login
              </Link>
            ) : (
              <Link
                to={"#"}
                className={`md:mx-3 mx-2 md:text-md text-sm py-1 uppercase font-medium text-white hover:text-slate-300`}
                onClick={() => logout()}
              >
                Logout
              </Link>
            )}

            <Link to={"wish"} className={`md:mx-3 mx-2 py-1 text-white hover:text-slate-300`}>
              <div className="main-nav__badge relative">
                <FavoriteIcon className={` md:!text-3xl !text-2xl  py-1`} />
                {token !== "" && (
                  <span className="main-nav__number main-nav__wish-number absolute text-xs top-[-5px] right-[-4px] font-medium">
                    {/* {auth.user.length ? wishProduct.length : 0} */}
                    {wishList.length}
                  </span>
                )}
              </div>
            </Link>

            <Link to={"cart"} className={`py-1 text-white hover:text-slate-300}`}>
              <div className="main-nav__badge flex justify-center items-end relative">
                <TbShoppingCartDiscount className={` md:!text-3xl !text-2xl py-1`} />
                {token !== "" && (
                  <span className="main-nav__number main-nav__wish-number text-xs absolute top-[-5px] right-[-4px] font-medium">
                    {cartList.length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-2 border-b border-slate-400">
        <Link
          to={"/"}
          className={`md:mx-3 mx-2  md:text-lg text-sm py-1 uppercase font-medium text-primary hover:text-sky-700 ${
            isLinkActive("/") ? "active-link" : ""
          }`}
        >
          home
        </Link>
        <Link
          to={"products"}
          className={`md:mx-3 mx-2  md:text-lg text-sm py-1  uppercase font-medium text-primary hover:text-sky-700 ${
            isLinkActive("/products") ? "active-link" : ""
          }`}
        >
          products
        </Link>
      </div>
    </>
  );
}
