import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

export default function SubtotalCart() {
  const { totalPrice, continueShopping } = useCartStore();

  return (
    <section className="p-4 border rounded-md min-w-[250px]">
      <div className="">
        <h2 className="uppercase font-bold">CART TOTAL</h2>
        <div className="flex justify-between items-center my-1.5">
          <span>total</span>
          <span>{totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center my-1.5">
          <span>Delivery</span>
          <span>Free</span>
        </div>

        <div className="flex justify-between items-center my-1.5">
          <span>Discount</span>
          <span>{"5.00$"}</span>
        </div>

        <div className="flex justify-between items-center my-1.5">
          <span>Tax</span>
          <span>{"10.00$"}</span>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between items-center my-1.5">
        <span className="font-semibold">subtotal</span>
        <span className="font-bold text-xl">{(totalPrice - 5).toFixed(2)}</span>
      </div>
      <div className="pt-3">
        <Button
          variant="contained"
          className={"w-full shadow-none !bg-secondary "}
          onClick={() => continueShopping()}
        >
          <Link className="text-white text-sm py-2" color="inherit" to="/checkout">
            Continue buying <EastIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
