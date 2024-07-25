import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/auth";
import { TbShoppingCartDiscount } from "react-icons/tb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useWishStore } from "../../../store/wish";
import { useCartStore } from "../../../store/cart";
// import DropdownNavbar from "./dropdownNavbar";
import NavbarRoutes from "./navbarRoutes";
import { useEffect } from "react";

export default function MainNavbar() {
  // const location = useLocation();

  // STORE
  const { token, logout } = useAuthStore();
  const { wishList } = useWishStore();
  const { localStorageList, totalPrice, calculateTotalPrice } = useCartStore();

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  // const isLinkActive = (linkPath: string) => {
  //   return location.pathname === linkPath;
  // };

  useEffect(() => {
    calculateTotalPrice();
  }, [localStorageList]);

  return (
    <>
      <div className="bg-transparent py-3 text-white shadow-md">
        <div className="myContainer flex justify-between items-center relative">
          <Link to={"/"}>
            <img
              src="/images/logo.png"
              className="md:w-36 w-28 lg:w-52 min-w-[28] md:h-auto"
              alt=""
            />
          </Link>

          <NavbarRoutes />

          <div className="flex justify-between items-center">
            {token === "" ? (
              <Link
                to={"login"}
                className={`lg:mx-3 md:mx-2 mx-1 2xl:text-xl lg:text-base sm:text-sm text-xs py-1 uppercase font-medium text-gray-500 hover:text-black`}
              >
                login
              </Link>
            ) : (
              <Link
                to={"#"}
                className={`lg:mx-3 md:mx-2 mx-1 2xl:text-xl lg:text-base sm:text-sm text-xs py-1 uppercase font-medium text-gray-500 hover:text-black`}
                onClick={() => logout()}
              >
                Logout
              </Link>
            )}

            <Link to={"wish"} className={`md:me-2 me-2 py-1 text-gray-500 hover:text-black`}>
              <div className="main-nav__badge relative">
                <FavoriteIcon
                  className={` md:!text-2xl lg:!text-3xl !text-2xl 2xl:!text-4xl  py-1`}
                />
                {token !== "" && (
                  <span className="main-nav__number main-nav__wish-number absolute text-xs top-[-5px] right-[-4px] font-medium">
                    {/* {auth.user.length ? wishProduct.length : 0} */}
                    {wishList.length}
                  </span>
                )}
              </div>
            </Link>

            <Link to={"cart"} className={`py-1 text-gray-500 hover:!text-black}`}>
              <div className="main-nav__badge flex justify-center items-end relative">
                <TbShoppingCartDiscount className={` lg:!text-3xl !text-2xl 2xl:!text-4xl py-1`} />
                {token !== "" && (
                  <>
                    <span className="main-nav__number main-nav__wish-number text-xs absolute top-[-5px] right-[-4px] font-medium md:hidden">
                      {localStorageList.length}
                    </span>
                    <span className="text-gray-500 hover:text-black text-sm max-md:hidden font-semibold">
                      {localStorageList.length}
                    </span>
                    <span className="text-gray-500 hover:text-black max-md:hidden mx-0.5 font-semibold">
                      /
                    </span>
                    <span className="text-gray-500 hover:text-black text-sm max-md:hidden font-semibold">
                      ${totalPrice}
                    </span>
                  </>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* BOTTOM NAVBAR (HOME, PRODUCTS AND CATEGORIES) */
}
{
  /* <div className=" flex justify-center flex-wrap items-center md:py-4 py-2 border-b border-slate-400">
  <Link
    to={"/"}
    className={`  md:text-base text-sm uppercase font-medium text-primary hover:text-sky-700 hover:!bg-[#E8E8E9] !p-2 ${
      isLinkActive("/") ? "active-link" : ""
    }`}
  >
    home
  </Link>
  <Link
    to={"products"}
    className={`  md:text-base text-sm  uppercase font-medium text-primary hover:text-sky-700 hover:!bg-[#E8E8E9] !p-2 ${
      isLinkActive("/products") ? "active-link" : ""
    }`}
  >
    products
  </Link>

  {/* <DropdownNavbar /> */
}

//   {categories.map((item, index) => (
//     <Link
//       key={`categories-${index + 1}`}
//       to={`/products/category/${item}`}
//       className={` md:text-base text-sm  uppercase font-medium text-primary hover:text-sky-700 hover:!bg-[#E8E8E9] p-2 ${
//         isLinkActive(`/products/category/${encodeURIComponent(item)}`) ? "active-link" : ""
//       }`}
//     >
//       {item}
//     </Link>
//   ))}
// </div>
