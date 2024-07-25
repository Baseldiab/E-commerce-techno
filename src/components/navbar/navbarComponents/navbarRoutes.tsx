import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import DropdownNavbar from "./dropdownNavbar";

export default function NavbarRoutes() {
  const location = useLocation();

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath: string) => {
    return location.pathname === linkPath;
  };

  return (
    <>
      {/* BOTTOM NAVBAR (HOME, PRODUCTS AND CATEGORIES) */}
      <div className=" flex justify-center flex-wrap items-center max-sm:hidden ">
        <Link
          to={"/"}
          className={`md:mx-3 mx-2 2xl:*:text-xl lg:*:text-base sm:*:text-sm *:text-xs uppercase font-medium text-gray-500 hover:text-black  min-h-[25px] py-3`}
        >
          <p className={`${isLinkActive("/") ? "active-link" : ""}`}>home</p>
        </Link>
        <Link
          to={"products"}
          className={`md:mx-3 mx-2 2xl:*:text-xl lg:*:text-base sm:*:text-sm *:text-xs uppercase font-medium text-gray-500 hover:text-black  min-h-[25px] py-3`}
        >
          <p className={`${isLinkActive("/products") ? "active-link" : ""}`}>products</p>
        </Link>

        <Link
          to={"#"}
          className={`navbar__desktop__categories md:mx-3 mx-2 2xl:*:text-xl lg:*:text-base sm:*:text-sm *:text-xs uppercase font-medium text-gray-500 hover:text-black py-4 min-h-[25px] delay-100`}
        >
          <span className="flex justify-between items-center gap-0.5">
            <span className="">Categories</span>
            <span>
              <FaAngleDown className="font-thin text-xs !text-slate-300" />
            </span>
          </span>
        </Link>
        <DropdownNavbar />

        {/* <DropdownNavbar /> */}

        {/* {categories.map((item, index) => (
          <Link
            key={`categories-${index + 1}`}
            to={`/products/category/${item}`}
            className={`md:mx-3 mx-2 md:text-md sm:text-sm text-xs py-1 uppercase font-medium text-white hover:text-slate-300${
              isLinkActive(`/products/category/${encodeURIComponent(item)}`) ? "active-link" : ""
            }`}
          >
            {item}
          </Link>
        ))} */}
      </div>
    </>
  );
}
