import { Link } from "react-router-dom";

export default function WishEmpty() {
  return (
    <div className="myContainer flex justify-center py-5">
      <h2 className="text-black font-bold">
        Empty wish list go to products to add products
        <Link to="/products" className="mx-0.5 border-b border-black">
          {" Products"}
        </Link>
      </h2>
    </div>
  );
}
