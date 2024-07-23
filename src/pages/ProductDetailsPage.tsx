import { Breadcrumbs, Rating, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/products";
import { useEffect, useState } from "react";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { successNotification } from "../components/notifications/notifications";
import { CartDto } from "../components/types/cartDto";
import { useWishStore } from "../store/wish";
import { useCartStore } from "../store/cart";
import { useAuthStore } from "../store/auth";
import { GiPayMoney } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SimilarProducts from "./../components/products/similarProducts";
import ProductContent from "../components/products/productContent";
import Swal from "sweetalert2";
import { Add, Remove } from "@mui/icons-material";
import ProductDetailsLeftSide from "../components/productDetails/productDetailsLeftSide";
import ProductDetailsBox from "../components/box/productDetailsBox";
import SwiperSlider from "../components/swipers/swiper.slider";
import { RenderProduct } from "../components/global/renderProducts";

export default function ProductDetailsPage() {
  const { productId } = useParams();

  const [initialRate, setInitialRate] = useState<number>(2);
  const [qty, setQty] = useState<number | string>(1);

  // STORE
  const { item, sendGetItem, list, sendGetCategoryProducts } = useProductStore();
  const { token } = useAuthStore();
  const { sendAddToWish } = useWishStore();
  const { sendUpdateCart } = useCartStore();

  useEffect(() => {
    if (productId) {
      sendGetItem(productId);
    }
  }, [productId]);

  //   console.log(item);

  useEffect(() => {
    if (item) {
      setInitialRate(item.rating ? item.rating.rate : 4);
      if (item.category) {
        sendGetCategoryProducts(item.category);
      }
      setQty(item?.quantity ? item.quantity : 1);
    }
  }, [item]);

  const navigate = useNavigate();

  const mustLogin = () => {
    Swal.fire({
      title: "<strong>SIGN IN TO SYNC YOUR SAVED ITEMS ACROSS ALL YOUR DEVICES</strong>",
      icon: "warning",
      // timer: 1000,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "SIGN IN",
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: "CONTINUE SHOPPING",
      cancelButtonAriaLabel: "Thumbs down",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login", { replace: true });
      }
    });
  };

  const handleAddToWish = () => {
    //     const succesLogin = () => {
    if (token !== "" && item) {
      sendAddToWish(item);
      successNotification("successfully Add To Wishlist");
    } else mustLogin();
  };

  const handleAddToCart = () => {
    if (token !== "" && item) {
      const payload: CartDto = {
        userId: 2,
        date: "2024-6-13",
        products: [{ productId: item.id ? item.id : "1", quantity: 1 }],
      };

      sendUpdateCart(payload, item, qty as number);
      successNotification("Added to cart successfully");
    } else mustLogin();
  };

  return (
    <>
      <section className="md:py-4 py-2 myContainer">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link className="border-b border-black" color="inherit" to="/">
            Home
          </Link>
          <Link className="border-b border-black" color="inherit" to="/products">
            Products
          </Link>
          <Link
            className="border-b border-black"
            color="inherit"
            to={`/products/category/${item?.category}`}
          >
            {item?.category}
          </Link>
          <Typography color="text.primary">{item?.title}</Typography>
        </Breadcrumbs>
      </section>

      <section className="md:py-4 pb-2  myContainer">
        <div className="container grid lg:grid-cols-6 grid-col-1 items-start md:gap-10">
          {/* PRODUCT IMAGE */}

          <ProductDetailsLeftSide item={item} />

          {/* PRODUCT DETAILS CONTENT */}
          <section className="col-span-4">
            {/* TITLE */}
            <h1 className="md:text-4xl text-2xl md:mb-6 mb-2 max-md:my-3">{item?.title}</h1>

            {/* PRICE */}
            <h4 className="singleProduct__price md:text-2xl text-lg font-semibold my-4 text-[#1B6392]">
              ${Number(item?.price).toFixed(2)}
            </h4>

            {/* RATING */}
            <div className="flex justify-start items-center my-2">
              <Rating name="read-only" value={initialRate} readOnly />
              <span className="text-gray-900 font-bold mx-0.5">{`${
                item?.rating ? item?.rating.rate : 4
              }`}</span>
              <span className="text-gray-500">{` (${
                item?.rating ? item?.rating.count : 130
              } Reviews)`}</span>
            </div>

            {/* AVAILABILITY */}
            <p className="singleProduct__availability text-gray-600 my-2">
              <span>Availability : </span>
              <span className="text-green-600 font-medium">In Stock</span>
            </p>

            {/* CATEGORY */}
            <p className="singleProduct__availability text-gray-600 my-2">
              <span>Category : </span>
              <span className=" font-medium capitalize">{item?.category}</span>
            </p>

            {/*DESCRIPTION  */}
            <div className="singleProduct__description md:my-4 my-4 line-clamp-4">
              {/* <h4 className="singleProduct__description-head my-2 text-capitalize">Description</h4> */}
              <p className="singleProduct__description-text text-gray-500 font-medium capitalize">
                {item?.description}
              </p>
            </div>

            {/* Start counter */}
            <div className="flex items-center justify-between my-2  md:h-[45px] h-[30px] border-background border-[.5px] md:max-w-[100px] max-w-[80px] rounded-sm font-extrabold text-background">
              <button
                className=" cursor-pointer bg-slate-100 hover:bg-slate-300 !h-full col-span-1 px-0.5"
                onClick={() => {
                  // dispatch(decreaseQuantity(product.id));
                  setQty(Number(qty) - 1);
                }}
              >
                <Remove />
              </button>
              <span className="min-w-[25px] md:text-lg text-base text-center col-span-2">
                {qty}
              </span>
              <button
                className="cursor-pointer bg-slate-100 hover:bg-slate-300 !h-full col-span-1 px-0.5"
                onClick={() => {
                  // dispatch(increaseQuantity(product.id));
                  setQty(Number(qty) + 1);
                }}
              >
                <Add />
              </button>
            </div>

            {/* ADD TO CART AND BUY BUTTONS */}
            <div className="singleProduct__buttons mt-2 w-full">
              <button
                className="main-button add-cart add-cart-item me-2 my-2 px-4 py-2 bg-secondary text-white rounded w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCartIcon />
                Add to Cart
              </button>

              <button
                disabled
                className="main-button add-cart add-cart-item me-2 my-2 px-4 py-2 border border-secondary text-secondary rounded w-full"
                // onClick={handleAddToCart}
              >
                Buy Now
              </button>
            </div>

            {/* ADD TO WISH BUTTONS */}
            <div className="flex justify-between items-center mb-2">
              <button
                className="main-button add-wish add-cart-item  group hover:!text-blue-800 py-2 text-[#475156] rounded"
                title="you must login first to add to wish"
                onClick={handleAddToWish}
              >
                <FavoriteBorderIcon className="group-hover:!text-blue-800" /> Add to Wish
              </button>
            </div>

            {/* CARDS */}
            <section className="col-span-1 flex md:justify-between flex-wrap justify-center  gap-3 md:my-0">
              <ProductDetailsBox
                icon={<AdminPanelSettingsIcon className="text-secondary py-2 !text-6xl" />}
                text={"Safe transfer process"}
              />

              <ProductDetailsBox
                icon={<GiPayMoney className="text-secondary py-2 !text-6xl" />}
                text={"Payment when receiving"}
              />

              <ProductDetailsBox
                icon={<AiOutlineProduct className="text-secondary py-2 !text-6xl" />}
                text={"Product is as described"}
              />
            </section>
          </section>
        </div>
      </section>

      <ProductContent
        title={item?.title ? item?.title : ""}
        description={item?.description ? item?.description : ""}
        rating={item?.rating ? item?.rating : { count: 0, rate: 0 }}
      />

      <SimilarProducts list={list} />

      <section className="pb-4">
        <SwiperSlider
          sectionTitle={"similar-products"}
          products={list}
          renderProduct={RenderProduct}
        />
      </section>
    </>
  );
}
