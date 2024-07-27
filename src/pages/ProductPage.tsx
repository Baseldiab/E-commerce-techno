import { useEffect, useState } from "react";
import { useProductStore } from "../store/products";
import MainCard from "../components/products/mainCard";
import {
  // Breadcrumbs,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  // Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import { Link } from "react-router-dom";
import SwiperSlider from "../components/swipers/swiper.slider";
import { RenderProduct } from "../components/global/renderProducts";
import CategoriesSection from "../components/layout/Categories.section";
import ProductsTitle from "../components/products/products.title";
import { Helmet } from "react-helmet";

export default function ProductPage() {
  //   STORE
  const { list, sendGetProductsList, sendGetCategoriesList, sendGetSearchList } = useProductStore();

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
      <Helmet>
        <title>E-commerce Techno | Products</title>
        <meta
          name="description"
          content="Browse our wide selection of electronics, jewelry, men's clothing, and women's clothing. Find the perfect products for your needs at E-commerce Techno."
        />
      </Helmet>

      <CategoriesSection />

      <section className="myContainer py-4 md:py-6 lg:py-12 2xl:py-14 bg-[#f1f6f2]">
        <ProductsTitle
          title={"Our Products"}
          text={
            "Mauris tellus montes vestibulum dipiscing mi sociosqu erat a condimentum est arcu senectus sociosqu consequat."
          }
        />

        {/* PRODUCTS SEARCH */}
        <div className="select-category md:mb-3 flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start md:gap-5 ">
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

        {/* PRODUCTS */}
        <div className="max-md:hidden mb-3 gap-5 grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-col-1 ">
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

        <SwiperSlider sectionTitle={"all-products"} products={list} renderProduct={RenderProduct} />
      </section>
    </>
  );
}
