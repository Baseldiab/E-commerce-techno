import { useEffect } from "react";
import HomeAds from "../components/home/homeAds";
import HomeDeals from "../components/home/homeDeals";
import HomeFeatures from "../components/home/homeFeatures";
import { useProductStore } from "../store/products";
import HomeShopWithCategory from "../components/home/homeShopWithCategory";
import HomeFeaturesProducts from "../components/home/homeFeaturesProducts";
import HomeShopNow from "../components/home/homeShopNow";
import HomeBannerOne from "../components/home/homeBannerOne";

export default function HomePage() {
  //   STORE
  const {
    sendGetProductsList,
    sendGetCategoriesList,
    // list,
    // categories,
    // sendGetCategoryProducts,
  } = useProductStore();

  useEffect(() => {
    sendGetProductsList();
    sendGetCategoriesList();
  }, []);

  return (
    <>
      <HomeAds />
      <HomeFeatures />
      <HomeDeals />
      <HomeShopWithCategory />
      <HomeFeaturesProducts />
      <HomeBannerOne />
      <HomeShopNow />
    </>
  );
}
