import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import NavbarDrawer from "../../drawers/navbar.drawer";
import CategoryIcon from "@mui/icons-material/Category";

export default function MobileNavbar() {
  const [value, setValue] = React.useState<number>(0);
  const [open_categories_drawer, set_open_categories_drawer] = React.useState<boolean>(false);

  const location = useLocation();

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath: string) => {
    return location.pathname === linkPath;
  };

  return (
    <Box
      className="sm:!hidden fixed bottom-0 z-50"
      sx={{
        width: "100%",
        ".MuiButtonBase-root": {
          color: "#cbd5e19c !important",
        },
        ".Mui-selected": {
          color: "#fff !important",
        },
      }}
    >
      <BottomNavigation
        className="!bg-primary"
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={
            <Link
              to={"/"}
              className={`md:mx-3 mx-2 sm:text-sm text-xs uppercase font-medium text-slate-300 ${
                isLinkActive("/") ?? setValue(0)
              }`}
            >
              home
            </Link>
          }
          icon={<HomeIcon className={`${isLinkActive("/") ? "text-white" : "text-slate-300"}`} />}
        />

        <BottomNavigationAction
          label={
            <Link
              to={"products"}
              className={`md:mx-3 mx-2 sm:text-sm text-xs uppercase font-medium text-slate-300${
                isLinkActive("/products") ?? setValue(1)
              }`}
            >
              products
            </Link>
          }
          icon={
            <Link
              to={"products"}
              className={`md:mx-3 mx-2 sm:text-sm text-xs uppercase font-medium text-slate-300${
                isLinkActive("/products") ?? setValue(1)
              }`}
            >
              <CategoryIcon
                className={`${isLinkActive("/products") ? "text-white" : "text-slate-300"}`}
              />
            </Link>
          }
        />

        <BottomNavigationAction
          label={
            <Link
              to={"#"}
              className={`navbar__categories md:mx-3 mx-2 sm:text-sm text-xs  uppercase font-medium text-slate-300`}
              onClick={() => set_open_categories_drawer(true)}
            >
              Categories
            </Link>
          }
          icon={
            <Link
              to={"#"}
              className={`navbar__categories md:mx-3 mx-2 sm:text-sm text-xs  uppercase font-medium text-slate-300`}
              onClick={() => set_open_categories_drawer(true)}
            >
              <ListIcon />
            </Link>
          }
        />
      </BottomNavigation>

      <NavbarDrawer
        open={open_categories_drawer}
        onClose={() => set_open_categories_drawer(false)}
      />
    </Box>
  );
}
