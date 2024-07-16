import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useWishStore } from "../../store/wish";
import { useCartStore } from "../../store/cart";
import { useAuthStore } from "../../store/auth";
import { ProductModel } from "../types/productModel";
import { CartDto } from "../types/cartDto";
import {
  deleteModalNotification,
  mustLogin,
  successNotification,
} from "../notifications/notifications";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function MainCard(props: ProductModel) {
  // STORE
  const { token } = useAuthStore();
  const { sendAddToWish, sendDeleteItemWish } = useWishStore();
  const { sendAddToCart } = useCartStore();

  const handleAddToWish = () => {
    if (token !== "") {
      sendAddToWish(props);
      successNotification("successfully Add To Wishlist");
    } else mustLogin();
  };

  const AddToCart = (item: ProductModel) => {
    const payload: CartDto = {
      userId: 2,
      date: "2024-6-13",
      products: [{ productId: item.id, quantity: 1 }],
    };

    sendAddToCart(payload, item);
    successNotification("Added to cart successfully");
  };

  const handleDeleteItem = () => {
    deleteModalNotification(sendDeleteItemWish, props.id);
  };

  //   };

  return (
    <Box
      className={"main__card rounded-md relative h-full my-0 border"}
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
      }}
    >
      {/* IMAGE */}
      <div
        className="card_img  rounded-t-md p-4 relative"
        style={{
          // filter: "brightness(0.8)",
          backgroundColor: "#fff",
        }}
      >
        <Link className="card__img-link img-container " to={`/products/${props.id}`}>
          <img
            className="block rounded-t-md mx-auto w-auto max-w-[100%] !h-[250px]"
            src={props.image}
            alt={props.title}
          />
        </Link>
      </div>

      {/* CARD BUTTONS */}
      <div className="card__buttons hidden  justify-center items-center z-50 !absolute top-[7rem] translate-y-1/2 translate-x-1/2 right-1/2 gap-2">
        {/* ADD TO WISH LIST */}
        <Button
          variant="contained"
          className={" !bg-white !text-black !p-2 !rounded-full !min-w-[30px]"}
          onClick={handleAddToWish}
        >
          <FavoriteBorderIcon className="text-xs" />
        </Button>

        {/* ADD TO CART LIST */}
        <Button
          variant="contained"
          className={" !bg-white !text-black !p-2 !rounded-full !min-w-[30px] "}
          onClick={() => AddToCart(props)}
        >
          <AddShoppingCartIcon />
        </Button>

        {/* GO TO PRODUCT DETAILS */}
        <Link className="bg-[#FA8232] text-white rounded-full p-2" to={`/products/${props.id}`}>
          <VisibilityIcon className="text-xs" />
        </Link>
      </div>

      {/* CARD CONTENT */}
      <div className={`card_content ${props.isWishPage ? "min-h-[175px]" : "min-h-fit"}`}>
        <div className="card_body text-start px-5 py-2 mx-auto">
          {/* RATING */}
          <div className="flex justify-start items-center my-1">
            <Rating name="read-only" value={props.rating.rate} readOnly />
            <span className="text-gray-500">{`(${props.rating.count})`}</span>
          </div>

          {/* TITLE */}
          <Link className="text-light" to={`/products/${props.id}`}>
            <h5 className="card_title text-base font-medium">{props.title}</h5>
          </Link>

          {/* PRICE */}
          <h6 className="card_price font-mono  text-lg font-bold text-primary">
            {Number(props.price).toFixed(2)}$
          </h6>
        </div>

        {/* DELETE ITEM FROM WISHLIST  */}
        <div
          className={`card_footer mt-2  mx-auto absolute bottom-0 w-full px-5 pb-4
             "justify-end"
          ${props.isWishPage ? "flex" : "hidden"}`}
        >
          <Button
            variant="contained"
            className={" !bg-red-700 !text-white !p-2 !rounded-xl !min-w-[50px] "}
            onClick={handleDeleteItem}
          >
            <DeleteForeverIcon />
          </Button>
        </div>
      </div>
    </Box>
  );
}
