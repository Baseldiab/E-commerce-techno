import { Breadcrumbs, Typography } from "@mui/material";
import CheckoutForm from "../components/checkout/CheckoutForm";
// import CheckoutOrder from "../components/checkout/CheckoutOrder";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  return (
    <>
      <section className="py-4 myContainer">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link className="border-b border-black" color="inherit" to="/">
            Home
          </Link>

          <Typography color="text.primary">Payment method</Typography>
        </Breadcrumbs>
      </section>

      <CheckoutForm />
      <section className="myContainer py-8 flex md:justify-between justify-center items-start gap-4 max-md:flex-wrap">
        {/* <CheckoutOrder /> */}
      </section>
    </>
  );
}
