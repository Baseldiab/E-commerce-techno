import { useEffect, useState } from "react";
import { useProductStore } from "../store/products";
import MainCard from "../components/products/mainCard";
import {
  Breadcrumbs,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function ProductPage() {
  //   STORE
  const {
    list,
    categories,
    sendGetProductsList,
    sendGetCategoriesList,
    sendGetCategoryProducts,
    sendGetSearchList,
  } = useProductStore();

  // STATES
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearch = () => {
    sendGetSearchList(searchQuery);
  };

  useEffect(() => {
    sendGetProductsList();
    sendGetCategoriesList();
  }, []);

  return (
    <>
      <section className="py-4 myContainer">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link className="border-b border-black" color="inherit" to="/">
            Home
          </Link>

          <Typography color="text.primary">Products</Typography>
        </Breadcrumbs>
      </section>

      <section className="py-3 shadow-md">
        <div className="myContainer grid lg:grid-cols-4 gap-5 items-start">
          {/* SIDE FILTER */}
          <div className="col-span-1 hidden lg:inline-block ">
            <h3 className="mb-2 font-bold text-xl">Categories</h3>
            <ul className="list-none">
              <li
                className="cursor-pointer d-flex justify-between text-capitalize my-1 font-medium items-center"
                onClick={sendGetProductsList}
              >
                All
              </li>
              {categories.map((category) => {
                return (
                  <li
                    key={category}
                    className="cursor-pointer font-medium d-flex justify-between text-capitalize my-1 items-center"
                    onClick={() => sendGetCategoryProducts(category)}
                  >
                    {category.toUpperCase()}
                  </li>
                );
              })}
            </ul>
          </div>

          <section className="col-span-3">
            {/* PRODUCTS SEARCH */}
            <div className="select-category my-3 flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start gap-5">
              <FormControl
                className="md:!w-64"
                size="small"
                sx={{
                  // margin: 0,
                  minWidth: "250px !important",
                  maxWidth: "500px !important",
                  width: "50% !important",
                  // height: "2.7rem !important",
                }}
                variant="outlined"
              >
                <InputLabel
                  // sx={{ height: "2.7rem !important" }}
                  htmlFor="outlined-adornment-search"
                >
                  Search
                </InputLabel>
                <OutlinedInput
                  // size="small"
                  // sx={{ height: "2.7rem !important" }}
                  id="outlined-adornment-search"
                  type={"search"}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);

                    if (e.target.value === "") sendGetProductsList();
                  }}
                  endAdornment={
                    <InputAdornment
                      // sx={{ height: "2.7rem !important" }}
                      position="end"
                    >
                      <IconButton aria-label="search" onClick={onSearch} onMouseDown={onSearch}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="search"
                />
              </FormControl>

              <h5 className="right-side__head my-1 text-primary font-medium text-base">
                {list.length} product{list.length !== 1 ? "s" : ""} found
              </h5>
            </div>

            {/* PRODUCTS ADS */}
            <figure className="my-3">
              <img
                className="min-w-full"
                src="/images/products-ads.png"
                alt="gradient-background-cyber-monday-sales"
              />
            </figure>

            {/* PRODUCTS */}
            <div className="mb-3 gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 ">
              {list.map((product) => {
                return (
                  <div key={product.id}>
                    <MainCard
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      category={product.category}
                      price={product.price}
                      description={product.description}
                      rating={product.rating}
                    />
                  </div>
                );
              })}
              {/* <MainCard /> */}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
