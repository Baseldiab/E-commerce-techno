import {
  // Link,
  useParams,
} from "react-router-dom";
import { useProductStore } from "../store/products";
import { useEffect, useMemo, useState } from "react";
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
import Loading from "../components/Loading";
import SwiperSlider from "../components/swipers/swiper.slider";
import { RenderProduct } from "../components/global/renderProducts";
import WomanImage from "/images/categories/womenImage.webp";
import JewelleryImage from "/images/categories/jewellery.webp";
import ElectronicImage from "/images/categories/electronics.webp";
import MenImage from "/images/categories/men.webp";
import ProductsTitle from "../components/products/products.title";
import { Helmet } from "react-helmet";
import { capitalizeFirstLetter } from "../components/util";

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
  }, [categoryName]);

  const getCategoryImage = useMemo(() => {
    if (categoryName) {
      switch (categoryName) {
        case "electronics":
          return ElectronicImage;
        case "jewelery":
          return JewelleryImage;
        case "men's clothing":
          return MenImage;
        case "women's clothing":
          return WomanImage;
      }
    }
  }, [categoryName]);

  return (
    <>
      <Helmet>
        <title className="capitalize">
          E-commerce Techno | {capitalizeFirstLetter(categoryName)}
        </title>
        <meta
          name="description"
          content={`Discover the best ${categoryName} at E-commerce Techno. Shop now for unbeatable prices and quality products in ${categoryName}.`}
        />
      </Helmet>

      {list.length === 0 && categoryName === undefined ? (
        <Loading />
      ) : (
        <>
          <section className="myContainer py-4 md:py-6 lg:py-12 2xl:py-14">
            <figure className="">
              <img
                className="min-w-full"
                src={getCategoryImage}
                alt={`${categoryName} image`}
                loading="lazy"
              />
            </figure>
          </section>

          <section className="myContainer py-4 md:py-6 lg:py-12 2xl:py-14 bg-[#f1f6f2]">
            <ProductsTitle
              title={`${categoryName} Products`}
              text={
                "Mauris tellus montes vestibulum dipiscing mi sociosqu erat a condimentum est arcu senectus sociosqu consequat."
              }
            />

            <div className="select-category md:mb-3 flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start md:gap-5 ">
              <FormControl
                size="small"
                className="md:!w-64"
                sx={{
                  // m: 0,
                  minWidth: "250px !important",
                  maxWidth: "500px !important",
                  width: "50% !important",
                }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-search">Search</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-search"
                  type={"search"}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (categoryName && e.target.value === "") {
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

            <div className="my-3 max-md:hidden gap-5 grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-col-1 ">
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
            </div>

            <SwiperSlider
              sectionTitle={"all-products"}
              products={list}
              renderProduct={RenderProduct}
            />
          </section>
        </>
      )}
    </>
  );
}
