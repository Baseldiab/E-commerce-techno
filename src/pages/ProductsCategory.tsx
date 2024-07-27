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
import WomanImage from "/images/categories/womenImage.jpg";
import JewelleryImage from "/images/categories/jewellery.jpg";
import ElectronicImage from "/images/categories/electronics.jpg";
import MenImage from "/images/categories/men.jpg";

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
      {list.length === 0 && categoryName === undefined ? (
        <Loading />
      ) : (
        <>
          {/* <section className="py-4 myContainer">
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
          </section> */}

          <section className="col-span-3 lg:py-8 py-3 myContainer">
            <figure className="mb-4 mt-2 ">
              <img className="min-w-full" src={getCategoryImage} alt={`${categoryName} image`} />
            </figure>

            <div className="select-category flex sm:items-start sm:justify-between sm:flex-row  flex-col justify-start md:gap-5">
              <FormControl
                size="small"
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

              <h5 className="right-side__head mt-2 text-primary font-medium text-base">
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
