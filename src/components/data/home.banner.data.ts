import BannerFirst from "/images/home/home-banner-1-min.jpg.webp";
import BannerSecond from "/images/home/home-banner-2-min.jpg.webp";
import BannerThird from "/images/home/home-banner-3-min.jpg.webp";

interface Banners {
  id: number;
  title: string;
  text: string;
  image: string;
  link: string;
}

export const homeBanners: Banners[] = [
  {
    id: 0,
    title: "Discount Sweaters",
    text: "Anyway, you still use Lorem Ipsum and rightly so, as it will always have a place in the web workers.",
    image: BannerFirst,
    link: "products/category/women's clothing",
  },
  {
    id: 1,
    title: "Jewelry",
    text: "Have a place in the web workers toolbox, as things happen, not always the way you like it always.",
    image: BannerSecond,
    link: "products/category/jewelery",
  },
  {
    id: 2,
    title: "Our Accessories",
    text: "Even if your less into design and more into content strategy you may find some redeeming value.",
    image: BannerThird,
    link: "products/category/men's clothing",
  },
];
