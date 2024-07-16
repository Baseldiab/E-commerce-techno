import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cart";
import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";
import React from "react";

export default function CheckoutOrder() {
  const { localStorageList, totalPrice, confirmOrder } = useCartStore();

  return (
    <section className="p-4 border rounded-md min-w-[270px]">
      <div className="">
        <h2 className="uppercase font-bold">Application summery</h2>

        {localStorageList.map((product, index) => (
          <React.Fragment key={`cart-product-${index}`}>
            <div className="flex justify-start items-center my-2 gap-4">
              <figure>
                <img src={product.image} className="!max-w-[50px]" alt="product image" />
              </figure>
              <div className="max-w-[170px] *:text-start">
                <span>{product.title}</span>
                <p>
                  <span className="text-sky-500 font-semibold">
                    {Number(product.price).toFixed(2)}$
                  </span>
                  <span className="mx-0.5">x</span>
                  <span>{product.quantity}</span>
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}

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
          onClick={() => {
            confirmOrder();
          }}
        >
          <Link className="text-white text-sm py-2" color="inherit" to="/orderPlaced">
            Confirm Order <EastIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
}
