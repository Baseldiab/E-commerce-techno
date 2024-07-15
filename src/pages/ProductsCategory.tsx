import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../store/products";
import { useEffect, useState } from "react";
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
import Loading from "../components/Loading";

export default function ProductsCategory() {
  const { categoryName } = useParams();

  //   STORE
  const { list, sendGetCategoryProducts, sendGetSearchList } = useProductStore();

  // STATES
  const [searchQuery, setSearchQuery] = useState<string>("");

  const onSearch = () => {
    sendGetSearchList(searchQuery);
  };

  useEffect(() => {
    if (categoryName) {
      sendGetCategoryProducts(categoryName.replace(/-/g, " "));
    }
  }, []);

  //   useEffect(() => {
  //     // if (searchQuery === "") sendGetCategoryProducts(categoryName.replace(/-/g, " "));
  //     if (categoryName && searchQuery === "") {
  //       sendGetCategoryProducts(categoryName.replace(/-/g, " "));
  //     }
  //   }, [searchQuery]);
  //   console.log(categoryName.replace(/-/g, " "));
  //   console.log(list);

  return (
    <>
      {list.length === 0 && categoryName === undefined ? (
        <Loading />
      ) : (
        <>
          <section className="py-4 myContainer">
            <Breadcrumbs separator=">" aria-label="breadcrumb">
              <Link className="border-b border-black" color="inherit" to="/">
                Home
              </Link>
              <Link className="border-b border-black" color="inherit" to="/products">
                Products
              </Link>

              <Typography color="text.primary" className="!capitalize">
                {categoryName ? categoryName.replace(/-/g, " ") : ""}
              </Typography>
            </Breadcrumbs>
          </section>

          <section className="col-span-3 py-3 myContainer">
            <div className="select-category flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start gap-5">
              <FormControl
                className="md:!w-64"
                sx={{
                  m: 0,
                  minWidth: "250px !important",
                  maxWidth: "500px !important",
                  width: "40% !important",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-search"
                  type={"search"}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (categoryName && searchQuery === "") {
                      sendGetCategoryProducts(categoryName.replace(/-/g, " "));
                    }
                  }}
                  endAdornment={
                    <InputAdornment position="end">
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

            <figure className="my-3">
              <img
                className="min-w-full"
                src="/images/products-ads.png"
                alt="gradient-background-cyber-monday-sales"
              />
            </figure>

            <div className="my-3 gap-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-col-1 ">
              {list.slice(0, 8).map((product) => {
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
        </>
      )}
    </>
  );
}
