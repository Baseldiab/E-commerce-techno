import { Link } from "react-router-dom";

export default function CartEmpty() {
  return (
    <div className="myContainer flex justify-center py-5 ">
      <h2 className="text-primary font-bold">
        Empty cart go to
        <Link to="/products" className="mx-0.5 border-b border-black">
          Products
        </Link>
      </h2>
    </div>
  );
}
