import { useEffect } from "react";
// import HomeAds from "../components/home/homeAds";
import HomeDeals from "../components/home/homeDeals";
// import HomeFeatures from "../components/home/homeFeatures";
import { useProductStore } from "../store/products";
// import HomeShopWithCategory from "../components/home/homeShopWithCategory";
import HomeFeaturesProducts from "../components/home/homeFeaturesProducts";
import HomeShopNow from "../components/home/homeShopNow";
import HomeBannerOne from "../components/home/homeBannerOne";
import HomeBannerTwo from "../components/home/homeBannerTwo";
import SwiperHomeAds from "../components/swipers/swiper.homeAds";
import HomeBannerSection from "../components/home/homeBannerSection";
import HomAdvantage from "../components/home/hom.advantage";
import CategoriesSection from "../components/layout/Categories.section";

export default function HomePage() {
  //   STORE
  const { sendGetProductsList, sendGetCategoriesList } = useProductStore();

  useEffect(() => {
    sendGetProductsList();
    sendGetCategoriesList();
  }, []);

  return (
    <>
      <SwiperHomeAds />
      <HomeBannerSection />
      {/* <HomeFeatures /> */}
      <HomeDeals />
      {/* <HomeShopWithCategory /> */}
      <CategoriesSection />
      <HomeFeaturesProducts />
      <HomeBannerOne />
      <HomeShopNow />
      <HomAdvantage />
      <HomeBannerTwo />
    </>
  );
}
