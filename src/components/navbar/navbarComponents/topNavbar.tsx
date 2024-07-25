import { BsTelephone } from "react-icons/bs";
import {
  FaFacebook,
  FaPinterestP,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function TopNavbar() {
  return (
    <div className="bg-primary py-1.5 *:text-white md:block hidden border-b border-slate-400">
      <div className="myContainer flex justify-between items-center">
        <div className="flex justify-end items-center">
          <BsTelephone className="me-1 text-xs 2xl:text-lg md:text-sm" />
          <a className="2xl:text-lg text-sm" href="tel:+1-23456789012">
            +1-23456789012
          </a>
        </div>

        <div className="flex justify-start items-center">
          {/* <span className="text-sm">Follow us :</span> */}
          <div className="flex justify-between items-center gap-4">
            <FaXTwitter className="text-sm 2xl:text-lg" />
            <FaFacebook className="text-sm 2xl:text-lg" />
            <FaPinterestP className="text-sm 2xl:text-lg" />
            <FaYoutube />
            <FaSquareInstagram className="text-sm 2xl:text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
