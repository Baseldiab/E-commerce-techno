import FirstImg from "/images/home/swiper-1.jpg";
import SecondImg from "/images/home/swiper-2.jpg";
import ThirdImg from "/images/home/swiper-3.jpg";

interface HomeProps {
    id: number;
    topText: string;
    bottomText: string;
    image: string;
    link: string;
  }
  
  export const swiperHomeAdsData: HomeProps[] = [
    {
      id: 0,
      topText: "Multicoloured",
      bottomText: "Tie-dye Sweater",
      image: FirstImg,
      link: "products/category/women's clothing",
    },
    {
      id: 1,
      topText: "Black Crew Cut",
      bottomText: "Dress in Cut Style",
      image: SecondImg,
      link: "products/category/women's clothing",
    },
    {
      id: 2,
      topText: "The Shirt Is a",
      bottomText: "Staple for Man`s",
      image: ThirdImg,
      link: "products/category/men's clothing",
    },
  ];
  