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
    image: "/images/navbar/electronics-page.jpg",
    name: "electronics",
  },
  {
    image: "/images/navbar/jewelry.jpg",
    name: "jewelery",
  },
  {
    image: "/images/navbar/men's-clothings.jpg",
    name: "men's clothing",
  },
  {
    image: "/images/navbar/women's-clothings.jpg",
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
                <img
                  className="p-4 pb-2 mx-auto "
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                />
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
