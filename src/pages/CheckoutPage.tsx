import { Breadcrumbs, Typography } from "@mui/material";
import CheckoutForm from "../components/checkout/CheckoutForm";
// import CheckoutOrder from "../components/checkout/CheckoutOrder";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function CheckoutPage() {
  return (
    <>
      <Helmet>
        <title>E-commerce Techno - Checkout</title>
        <meta
          name="description"
          content="Complete your purchase at E-commerce Techno. Secure and fast checkout for electronics, jewelry, men's clothing, and women's clothing."
        />
      </Helmet>

      <section className="py-4 myContainer">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link className="border-b border-black" color="inherit" to="/">
            Home
          </Link>

          <Typography color="text.primary">Payment method</Typography>
        </Breadcrumbs>
      </section>

      {/* <CheckoutForm /> */}
      <CheckoutForm />
      <section className="myContainer py-8 flex md:justify-between justify-center items-start gap-4 max-md:flex-wrap">
        {/* <CheckoutOrder /> */}
      </section>
    </>
  );
}
