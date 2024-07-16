import HomeFeaturesBox from "../box/homeFeaturesBox";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export default function HomeFeatures() {
  return (
    <section
      id="HomeFeatures"
      className="myContainer grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 my-6 bg-featuresBg py-6"
    >
      <HomeFeaturesBox
        icon={<CreditCardIcon className=" py-2 !text-6xl" />}
        title={"Safe payment"}
        text={"Your money is safe"}
      />

      <HomeFeaturesBox
        icon={<HandshakeIcon className=" py-2 !text-6xl" />}
        title={"return in 24 hours"}
        text={"Easily return Products 24 hours"}
      />

      <HomeFeaturesBox
        icon={<HeadphonesIcon className=" py-2 !text-6xl" />}
        title={"24/7 support"}
        text={"Direct communication or messaging"}
      />

      <HomeFeaturesBox
        icon={<LocalShippingIcon className=" py-2 !text-6xl" />}
        title={"Fast shipping"}
        text={"shipping in 24 hours"}
      />
    </section>
  );
}
