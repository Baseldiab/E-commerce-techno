import { useEffect } from "react";
import HomeDeals from "../components/home/homeDeals";
import { useProductStore } from "../store/products";
import HomeFeaturesProducts from "../components/home/homeFeaturesProducts";
import HomeShopNow from "../components/home/homeShopNow";
import HomeBannerTwo from "../components/home/homeBannerTwo";
import SwiperHomeAds from "../components/swipers/swiper.homeAds";
import HomeBannerSection from "../components/home/homeBannerSection";
import HomAdvantage from "../components/home/hom.advantage";
import CategoriesSection from "../components/layout/Categories.section";
import { Helmet } from "react-helmet";

export default function HomePage() {
  //   STORE
  const { sendGetProductsList, sendGetCategoriesList } = useProductStore();

  useEffect(() => {
    sendGetProductsList();
    sendGetCategoriesList();
  }, []);

  return (
    <>
      <Helmet>
        <title>E-commerce Techno | Home</title>
        <meta
          name="description"
          content="Welcome to E-commerce Techno! Discover the best deals on electronics, jewelry, men's clothing, and women's clothing. Shop now for unbeatable prices and quality products."
        />
      </Helmet>
      <SwiperHomeAds />
      <HomeBannerSection />
      <HomeDeals />
      <CategoriesSection />
      <HomeFeaturesProducts />
      <HomeBannerTwo />
      <HomeShopNow />
      <HomAdvantage />
    </>
  );
}
