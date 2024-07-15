import { useEffect, useState } from "react";
import { useProductStore } from "../store/products";
import MainCard from "../components/products/mainCard";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

  useEffect(() => {
    if (searchQuery === "") sendGetProductsList();
  }, [searchQuery]);

  // const AddToCart = (item: ProductModel) => {
  //   const payload: CartDto = {
  //     userId: 2,
  //     date: "2024-6-13",
  //     products: [{ productId: item.id, quantity: 1 }],
  //   };

  //   sendAddToCart(payload, item);
  //   successNotification("Added to cart successfully");
  // };

  return (
    <>
      <section className="md:py-16 py-10 shadow-md">
        <div className="myContainer grid lg:grid-cols-4 gap-5 items-start">
          {/* SIDE FILTERATION */}
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

          {/* PRODUCTS */}
          <div className="col-span-3">
            <div className="select-category md:mb-10 mb-4 flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start gap-5">
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
                  onChange={(e) => setSearchQuery(e.target.value)}
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

            <div className=" gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 ">
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
          </div>
        </div>
      </section>
    </>
  );
}
