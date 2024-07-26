import FreeShipping from "/images/home/freeShipping.svg";
import SupportTeam from "/images/home/supportTeam.svg";
import SafeSecure from "/images/home/safeSecure.svg";
import OnlinePayments from "/images/home/onlinePayments.svg";

export interface Advantages {
    title: string;
    image: string;
    text: string;
  }

export const advantages: Advantages[] = [
    {
        title: "Free Shipping",
        image: FreeShipping,
        text: "Rigid proponents of content strategy may shun the use of dummy copy."
    },
    {
        title: "Support Team",
        image: SupportTeam,
        text: "Designers might want to ask them to provide style sheets with the decks."
    },
    {
        title: "Online Payments",
        image: OnlinePayments,
        text: "Fake data can ensure a nice looking layout but it doesn’t reflect what."
    },
    {
        title: "Safe Secure",
        image: SafeSecure,
        text: "When it’s about controlling hundreds of articles, product pages for web."
    }
]