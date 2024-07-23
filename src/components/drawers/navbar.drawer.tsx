import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { categories } from "../data/constants.data";
import { Link, useLocation } from "react-router-dom";
import { SiStmicroelectronics } from "react-icons/si";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function NavbarDrawer({ open, onClose }: Props) {
  const location = useLocation();

  // FUNCTION TO DETERMINE IF A LINK SHOULD BE ACTIVE
  const isLinkActive = (linkPath: string) => {
    return location.pathname === linkPath;
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
      <List>
        <div className="flex justify-between items-center">
          <h3 className="m-2 font-medium">Categories</h3>
          <Button onClick={onClose}>
            <CloseIcon className="text-black" />
          </Button>
        </div>
        <Divider className="bg-slate-500" />
        {categories.map((item, index) => (
          <ListItem
            key={`categories-mobileNavbar-${index}`}
            className={`ps-1 border-b  ${
              isLinkActive(`/products/category/${encodeURIComponent(item)}`)
                ? "bg-gray-300"
                : "bg-transparent"
            }`}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{<SiStmicroelectronics />}</ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    key={`categories-${index + 1}`}
                    to={`/products/category/${item}`}
                    className={` md:text-base text-sm  uppercase font-medium text-gray-600 p-2  ${
                      isLinkActive(`/products/category/${encodeURIComponent(item)}`)
                        ? "!text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {item}
                  </Link>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer open={open} onClose={onClose} className="sm:!hidden">
        {DrawerList}
      </Drawer>
    </>
  );
}
