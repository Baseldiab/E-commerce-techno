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
      setInitialRate(item.rating.rate);
      sendGetCategoryProducts(item.category);
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
        products: [{ productId: item.id, quantity: 1 }],
      };

      sendUpdateCart(payload, item, qty as number);
      successNotification("Added to cart successfully");
    } else mustLogin();
  };

  return (
    <>
      <section className="py-3 myContainer">
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

      <section className="md:py-16 py-10  myContainer">
        <div className="container grid lg:grid-cols-6 grid-col-1 items-start md:gap-10">
          {/* PRODUCT IMAGE */}

          <ProductDetailsLeftSide item={item} />

          {/* PRODUCT DETAILS CONTENT */}
          <section className="col-span-3">
            {/* RATING */}
            <div className="flex justify-start items-center my-1">
              <Rating name="read-only" value={initialRate} readOnly />
              <span className="text-gray-900 font-bold me-0.5">{`${item?.rating.rate} overall rate `}</span>
              <span className="text-gray-500">{` (${item?.rating.count} Reviews)`}</span>
            </div>

            {/*DESCRIPTION  */}
            <div className="singleProduct__description my-4">
              {/* <h4 className="singleProduct__description-head my-2 text-capitalize">Description</h4> */}
              <p className="singleProduct__description-text text-gray-600">{item?.description}</p>
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

            <h4 className="singleProduct__price text-lg font-semibold my-4 text-primary">
              ${Number(item?.price).toFixed(2)}
            </h4>

            {/* QUANTITY AND ADD TO WISH BUTTONS */}
            <div className="flex justify-between items-center">
              <button
                className="main-button add-wish add-cart-item my-1  py-2 text-sky-600 rounded"
                title="you must login first to add to wish"
                onClick={handleAddToWish}
              >
                <FavoriteBorderIcon /> Add to Wish
              </button>

              {/* Start counter */}
              <div className="flex items-center justify-between gap-2 min-h-[34px] border-background border-[.5px] rounded-sm  px-2 font-extrabold text-background">
                <span
                  className=" cursor-pointer"
                  onClick={() => {
                    // dispatch(decreaseQuantity(product.id));
                    setQty(Number(qty) - 1);
                  }}
                >
                  <Remove />
                </span>
                <span className="min-w-[25px] text-lg text-center">{qty}</span>
                <span
                  className=" cursor-pointer"
                  onClick={() => {
                    // dispatch(increaseQuantity(product.id));
                    setQty(Number(qty) + 1);
                  }}
                >
                  <Add />
                </span>
              </div>
              {/* End counter */}

              {/* <input
                className="quantity-field !min-w-[20px] !p-2 border border-slate-500"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue={item?.quantity ? item.quantity : 1}
                onChange={(e) =>
                  //   dispatch(
                  //     onChangeQuantity({
                  //       productId: item.id,
                  //       qty: e.target.value,
                  //     })
                  //   )
                  setQty(e.target.value)
                }
                // readOnly
              /> */}
            </div>

            <div className="singleProduct__buttons my-4 w-full">
              <button
                className="main-button add-cart add-cart-item me-2 my-1 px-4 py-2 bg-secondary text-white rounded w-full"
                onClick={handleAddToCart}
              >
                <ShoppingCartIcon />
                Add to Cart
              </button>

              <button
                disabled
                className="main-button add-cart add-cart-item me-2 my-1 px-4 py-2 border border-secondary text-secondary rounded w-full"
                // onClick={handleAddToCart}
              >
                Buy Now
              </button>
            </div>

            <ProductContent
              title={item ? item?.title : ""}
              description={item ? item.description : ""}
              rating={item ? item.rating : { count: 0, rate: 0 }}
            />
          </section>

          <section className="col-span-1 flex lg:flex-col gap-3 md:my-0 my-2">
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
        </div>
      </section>

      <SimilarProducts list={list} />
    </>
  );
}
