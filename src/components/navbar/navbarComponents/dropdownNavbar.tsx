// // import * as React from "react";
// // import { styled, alpha } from "@mui/material/styles";
// // import Button from "@mui/material/Button";
// // import Menu, { MenuProps } from "@mui/material/Menu";
// // import MenuItem from "@mui/material/MenuItem";
// // import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// // import { Link } from "react-router-dom";

// // const StyledMenu = styled((props: MenuProps) => (
// //   <Menu
// //     elevation={0}
// //     anchorOrigin={{
// //       vertical: "bottom",
// //       horizontal: "right",
// //     }}
// //     transformOrigin={{
// //       vertical: "top",
// //       horizontal: "right",
// //     }}
// //     {...props}
// //   />
// // ))(({ theme }) => ({
// //   "& .MuiPaper-root": {
// //     borderRadius: 6,
// //     marginTop: theme.spacing(1),
// //     minWidth: 180,
// //     color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
// //     boxShadow:
// //       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
// //     "& .MuiMenu-list": {
// //       padding: "4px 0",
// //     },
// //     "& .MuiMenuItem-root": {
// //       "& .MuiSvgIcon-root": {
// //         fontSize: 18,
// //         color: theme.palette.text.secondary,
// //         marginRight: theme.spacing(1.5),
// //       },
// //       "&:active": {
// //         backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
// //       },
// //     },
// //   },
// // }));

// // export default function DropdownNavbar() {
// //   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// //   const open = Boolean(anchorEl);
// //   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
// //     setAnchorEl(event.currentTarget);
// //   };
// //   const handleClose = () => {
// //     setAnchorEl(null);
// //   };

// //   const isLinkActive = (linkPath: string) => {
// //     return location.pathname === linkPath;
// //   };

// //   const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

// //   return (
// //     <div>
// //       <Button
// //         id="demo-customized-button"
// //         aria-controls={open ? "demo-customized-menu" : undefined}
// //         aria-haspopup="true"
// //         aria-expanded={open ? "true" : undefined}
// //         variant="text"
// //         disableElevation
// //         onClick={handleClick}
// //         endIcon={<KeyboardArrowDownIcon />}
// //         className={` md:!text-base !text-sm  !uppercase !font-medium !text-primary hover:!text-sky-700 !bg-transparent hover:!bg-[#E8E8E9] hover:!p-2 !rounded-none`}
// //       >
// //         Categories
// //       </Button>
// //       <StyledMenu
// //         id="demo-customized-menu"
// //         MenuListProps={{
// //           "aria-labelledby": "demo-customized-button",
// //         }}
// //         anchorEl={anchorEl}
// //         open={open}
// //         onClose={handleClose}
// //       >
// //         {categories.map((item, index) => (
// //           <MenuItem key={`categories-dropdown-${index + 1}`} onClick={handleClose} disableRipple>
// //             <Link
// //               to={`/products/category/${item}`}
// //               className={`md:mx-3 mx-2  md:text-base text-sm py-1  uppercase font-medium text-primary hover:text-sky-700 ${
// //                 isLinkActive(`/products/category/${encodeURIComponent(item)}`) ? "active-link" : ""
// //               }`}
// //             >
// //               {item}
// //             </Link>
// //           </MenuItem>
// //         ))}
// //       </StyledMenu>
// //     </div>
// //   );
// // }

// import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import Menu, { MenuProps } from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { Link } from "react-router-dom";

// const StyledMenu = styled((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
//       },
//     },
//   },
// }));

// export default function DropdownNavbar() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMouseLeave = () => {
//     setAnchorEl(null);
//   };

//   const isLinkActive = (linkPath: string) => {
//     return location.pathname === linkPath;
//   };

//   const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

//   return (
//     <div>
//       <Button
//         id="demo-customized-button"
//         aria-controls={open ? "demo-customized-menu" : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? "true" : undefined}
//         variant="text"
//         disableElevation
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         endIcon={<KeyboardArrowDownIcon />}
//         className={`md:!text-base !text-sm !uppercase !font-medium !text-primary hover:!text-sky-700 !bg-transparent hover:!bg-[#E8E8E9] hover:!p-2 !rounded-none`}
//       >
//         Categories
//       </Button>
//       <StyledMenu
//         id="demo-customized-menu"
//         MenuListProps={{
//           "aria-labelledby": "demo-customized-button",
//         }}
//         anchorEl={anchorEl}
//         open={open}
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//         onClose={handleMouseLeave}
//       >
//         {categories.map((item, index) => (
//           <MenuItem
//             key={`categories-dropdown-${index + 1}`}
//             onClick={handleMouseLeave}
//             disableRipple
//           >
//             <Link
//               to={`/products/category/${item}`}
//               className={`md:mx-3 mx-2 md:text-base text-sm py-1 uppercase font-medium text-primary hover:text-sky-700 ${
//                 isLinkActive(`/products/category/${encodeURIComponent(item)}`) ? "active-link" : ""
//               }`}
//             >
//               {item}
//             </Link>
//           </MenuItem>
//         ))}
//       </StyledMenu>
//     </div>
//   );
// }

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";

type Catagories = {
  image: string;
  name: string;
};
const catagories: Catagories[] = [
  {
    image: "/images/navbar/electronics-page.png",
    name: "electronics",
  },
  {
    image: "/images/navbar/jewelry.png",
    name: "jewelry",
  },
  {
    image: "/images/navbar/men's-clothings.png",
    name: "men's clothing",
  },
  {
    image: "/images/navbar/women's-clothings.png",
    name: "women's clothing",
  },
];

export default function DropdownNavbar() {
  return (
    <Box
      id="categories-dropdown"
      className={`categories__dropdown-navbar absolute hidden group-hover:block top-[100%] left-0 right-0 z-0 *:!text-primary md:mx-16 mx-4 lg:mx-24 xl:mx-32 categories__dropdown-navbar  delay-300 shadow-lg animate-fadeIn max-sm:!hidden`}
      sx={{ bgcolor: "background.paper", maxWidth: "1440px" }}
    >
      <nav>
        <List className="flex justify-between items-center">
          {catagories.map((item, index) => (
            <ListItem key={`categories-dropdown-navbar-${index}`} disablePadding>
              <figure className="bg-white py-2 lg:py-4">
                <img className="p-4 pb-2 mx-auto " src={item.image} alt={item.name} />
                <figcaption className="text-center mx-auto capitalize">
                  <Link
                    to={`/products/category/${item.name}`}
                    className={`md:mx-3 mx-2 md:text-base text-sm py-1 uppercase font-medium text-primary hover:text-sky-700 underline underline-offset-2`}
                  >
                    {item.name}
                  </Link>
                </figcaption>
              </figure>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
