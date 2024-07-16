import { Breadcrumbs, Typography } from "@mui/material";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutOrder from "../components/checkout/CheckoutOrder";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  return (
    <>
      <section className="py-4">
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link className="border-b border-black" color="inherit" to="/">
            Home
          </Link>

          <Typography color="text.primary">Payment method</Typography>
        </Breadcrumbs>
      </section>
      <section className="myContainer py-8 flex justify-between items-start gap-4 max-md:flex-wrap">
        <CheckoutOrder />
        <CheckoutForm />
      </section>
    </>
  );
}
