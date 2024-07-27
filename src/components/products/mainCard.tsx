import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Button, Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useWishStore } from "../../store/wish";
import { useCartStore } from "../../store/cart";
import { useAuthStore } from "../../store/auth";
import { ProductModel } from "../types/productModel";
import { CartDto } from "../types/cartDto";
import { deleteModalNotification, successNotification } from "../notifications/notifications";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Swal from "sweetalert2";
import { useGlobalStore } from "../../store/global";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function MainCard(props: ProductModel) {
  // STORE
  const { token } = useAuthStore();
  const { sendAddToWish, sendDeleteItemWish } = useWishStore();
  const { sendAddToCart } = useCartStore();
  const { loadingActions } = useGlobalStore();

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
    if (token !== "") {
      sendAddToWish(props);
      successNotification("successfully Add To Wishlist");
    } else mustLogin();
  };

  const AddToCart = (item: ProductModel) => {
    if (token !== "") {
      const payload: CartDto = {
        userId: 2,
        date: "2024-6-13",
        products: [{ productId: item.id as string | number, quantity: 1 }],
      };

      sendAddToCart(payload, item);
      successNotification("Added to cart successfully");
    } else mustLogin();
  };

  const handleDeleteItem = () => {
    if (props.id) {
      deleteModalNotification(sendDeleteItemWish, props.id);
    }
  };

  //   };

  return (
    <Box
      className="main__card relative h-full my-0  hover:shadow-xl max-sm:w-[130px] "
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      {/* IMAGE */}
      <figure
        className="card_img  p-4 relative brightness-[0.9]"
        style={{
          backgroundColor: "#fff",
        }}
      >
        <Link className="card__img-link img-container !w-full !h-full" to={`/products/${props.id}`}>
          <img
            className="card__img-image block  mx-auto w-auto max-w-full h-[200px] max-sm:h-[120px]"
            src={props.image}
            alt={props.title}
            loading="lazy"
          />
        </Link>
      </figure>

      {/* CARD BUTTONS ON HOVER LARGE SCREEN */}
      <div className="card__buttons hidden justify-center items-center z-50 !absolute top-[7rem] translate-y-1/2 translate-x-1/2 right-1/2 gap-2 max-sm:!hidden">
        {/* ADD TO WISH LIST */}
        <Button
          disabled={loadingActions}
          title={"Add To Wishlist"}
          variant="contained"
          className={" !bg-white !text-black !p-2 !rounded-full !min-w-[30px]"}
          onClick={handleAddToWish}
        >
          <FavoriteBorderIcon className="text-xs" />
        </Button>

        {/* ADD TO CART LIST */}
        <Button
          disabled={loadingActions}
          title={"Add To Cart"}
          variant="contained"
          className={" !bg-white !text-black !p-2 !rounded-full !min-w-[30px] "}
          onClick={() => AddToCart(props)}
        >
          <AddShoppingCartIcon />
        </Button>

        {/* GO TO PRODUCT DETAILS */}
        <Link
          title="Show Details"
          className="bg-[#FA8232] text-white rounded-full p-2"
          to={`/products/${props.id}`}
        >
          <VisibilityIcon className="text-xs" />
        </Link>
      </div>

      {/* CARD CONTENT */}
      <div className={`card_content ${props.isWishPage ? "min-h-[180px] " : "min-h-fit"}`}>
        <div className="card_body text-start px-1.5 py-2 mx-auto">
          {/* RATING */}
          <div className="sm:flex justify-start items-center sm:my-1 flex-wrap">
            <Rating
              sx={{
                "@media(max-width: 672px)": {
                  ".MuiRating-icon": {
                    fontSize: "1rem",
                  },
                },
              }}
              size={"small"}
              name="read-only"
              value={props.rating ? props.rating.rate : 4.5}
              readOnly
            />
            <span className="text-gray-500 max-sm:hidden">{`(${
              props.rating ? props?.rating.count : 137
            })`}</span>
          </div>

          {/* TITLE */}
          <Link
            title={props.title}
            className="text-light card_title text-base max-sm:text-sm font-medium line-clamp-1"
            to={`/products/${props.id}`}
          >
            {props.title}
          </Link>

          {/* CATEGORY */}
          <Link
            title={props.category}
            className="text-light text-secondaryText max-sm:text-sm card_title text-base capitalize font-normal line-clamp-1"
            to={`products/category/${props.category}`}
          >
            {props.category}
          </Link>

          {/* PRICE */}
          <h6 className="card_price font-mono max-sm:text-sm text-lg text-black">
            ${Number(props.price).toFixed(2)}
          </h6>

          <Button
            variant="text"
            className={`!underline decoration-2 !decoration-gray-300 !text-sm  sm:!hidden !text-black !p-0 !rounded-xl underline-offset-1 !min-w-[50px] !capitalize
              `}
            onClick={() => AddToCart(props)}
          >
            {/* <AddShoppingCartIcon /> */}
            Add to cart
          </Button>
        </div>

        {/* DELETE ITEM FROM WISHLIST  */}
        <div
          className={`card_footer sm:mt-2  mx-auto gap-2 flex w-full px-5 pb-4 sm:justify-end justify-between max-sm:hidden ${
            props.isWishPage ? "block" : "hidden"
          }`}
        >
          <Button
            className={`!bg-red-700 !text-white !p-2 !rounded-xl !min-w-[50px] `}
            variant="contained"
            onClick={handleDeleteItem}
          >
            <DeleteForeverIcon />
          </Button>
        </div>
      </div>
    </Box>
  );
}
