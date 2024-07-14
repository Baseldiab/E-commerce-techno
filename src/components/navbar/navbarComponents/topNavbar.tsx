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
    <div className="bg-primary py-1 *:text-white md:block hidden border-b border-slate-400">
      <div className="myContainer flex justify-between items-center">
        <div className="flex justify-end items-center">
          <BsTelephone className="me-1 text-xs" />
          <a className="text-xs" href="tel:+1-23456789012">
            +1-23456789012
          </a>
        </div>

        <div className="flex justify-start items-center">
          <span className="text-xs">Follow us :</span>
          <div className="flex justify-between items-center gap-1 ms-1">
            <FaXTwitter className="text-xs" />
            <FaFacebook className="text-xs" />
            <FaPinterestP className="text-xs" />
            <FaYoutube />
            <FaSquareInstagram className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
