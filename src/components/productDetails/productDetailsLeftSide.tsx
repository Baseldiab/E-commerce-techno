import { ProductModel } from "../types/productModel";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PinterestIcon from "@mui/icons-material/Pinterest";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

export default function ProductDetailsLeftSide({ item }: { item: ProductModel | null }) {
  return (
    <section className="col-span-2 rounded-lg max-sm:w-full">
      <h1 className="sm:hidden text-2xl mb-2">{item?.title}</h1>

      <figure
        className=" p-4 rounded-lg max-sm:flex justify-center w-full"
        style={{
          filter: "brightness(0.8)",
          backgroundColor: "#fff",
        }}
      >
        <img src={item?.image} className="w-full" alt={item?.title} loading="lazy" />
      </figure>

      <div className="mt-3">
        <div className="text-capitalize text-gray-600 flex justify-start items-center py-3">
          <span className="font-medium">Share:</span>
          <div className="flex justify-between items-center  mx-2 gap-2">
            <a
              className="bg-sky-500 rounded-full p-1.5 flex justify-center items-center"
              href="https://twitter.com/"
            >
              <XIcon className=" text-white !text-xs" />
            </a>
            <a
              className="bg-blue-500 rounded-full p-1.5 flex justify-center items-center"
              href="https://www.facebook.com/"
            >
              <FacebookIcon className=" text-white !text-xs" />
            </a>
            <a
              className="bg-sky-700 rounded-full p-1.5 flex justify-center items-center"
              href="https://www.telegram.com/"
            >
              <TelegramIcon className=" text-white !text-xs" />
            </a>
            <a
              className="bg-green-600 rounded-full p-1.5 flex justify-center items-center"
              href="https://web.whatsapp.com/"
            >
              <WhatsAppIcon className=" text-white !text-xs" />
            </a>
            <a
              className="bg-red-600 rounded-full p-1.5 flex justify-center items-center"
              href="https://www.pinterest.com/"
            >
              <PinterestIcon className=" text-white !text-xs" />
            </a>
          </div>
        </div>

        <div className="flex justify-start gap- my-2">
          <WorkspacePremiumIcon className="text-secondary" />
          <p className="PS-1">One year warranty</p>
        </div>

        <div className="flex justify-start gap-1 my-2">
          <LocalShippingIcon className="text-secondary" />
          <p className="PS-1">Free and fast shipping</p>
        </div>

        <div className="flex justify-start gap-1 my-2">
          <HandshakeIcon className="text-secondary" />
          <p className="PS-1">Easily return Products</p>
        </div>

        <div className="flex justify-start gap-1 my-2">
          <HeadphonesIcon className="text-secondary" />
          <p className="PS-1">Continuous technical support</p>
        </div>

        <div className="flex justify-start gap-1 my-2">
          <CreditCardIcon className="text-secondary" />
          <p className="PS-1">Payment in many ways</p>
        </div>
      </div>
    </section>
  );
}
