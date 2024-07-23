import { Breadcrumbs, Typography } from "@mui/material";
import CartEmpty from "../components/cart/cartEmpty";
// import PageTitle from "../components/title/PageTitle";
import { useCartStore } from "../store/cart";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import ShoppingCart from "../components/cart/shoppingCart";
import SubtotalCart from "../components/cart/subtotalCart";

export default function CartPage() {
  const { localStorageList, sendGetList } = useCartStore();

  useEffect(() => {
    sendGetList();
  }, []);

  return (
    <>
      {/* <PageTitle title="Cart" /> */}
      <section id="cartPage" className="py-4 myContainer">
        {localStorageList.length === 0 ? (
          <CartEmpty />
        ) : (
          <>
            <section className="pb-4">
              <Breadcrumbs separator=">" aria-label="breadcrumb">
                <Link className="border-b border-black" color="inherit" to="/">
                  Home
                </Link>

                <Typography color="text.primary">Cart</Typography>
              </Breadcrumbs>
            </section>

            <section className="flex md:justify-between justify-center items-start gap-4 max-md:flex-wrap">
              <ShoppingCart />
              <SubtotalCart />
            </section>
          </>
        )}
      </section>
    </>
  );
}
