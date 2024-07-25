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
          <BsTelephone className="me-1 text-xs xl:text-lg md:text-base" />
          <a className="text-sm xl:text-lg md:text-base" href="tel:+1-23456789012">
            +1-23456789012
          </a>
        </div>

        <div className="flex justify-start items-center">
          {/* <span className="text-sm">Follow us :</span> */}
          <div className="flex justify-between items-center gap-4">
            <FaXTwitter className="text-sm xl:text-lg md:text-base" />
            <FaFacebook className="text-sm xl:text-lg md:text-base" />
            <FaPinterestP className="text-sm xl:text-lg md:text-base" />
            <FaYoutube />
            <FaSquareInstagram className="text-sm xl:text-lg md:text-base" />
          </div>
        </div>
      </div>
    </div>
  );
}
