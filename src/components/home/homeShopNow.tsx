import { useMemo } from "react";
import { useProductStore } from "../../store/products";
import { RenderProduct } from "../global/renderProducts";
import useWindowWidth from "../hooks/calc_width_of_screen";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";
import { getWindowCardsCountHomeProducts } from "../util";
import SectionsTitle from "../title/sectionsTitle";

export default function HomeShopNow() {
  //   STORE
  const { list } = useProductStore();

  const windowWidth = useWindowWidth();

  const cardsCount = useMemo(() => getWindowCardsCountHomeProducts(windowWidth), [windowWidth]);

  return (
    <section id="homeShopNow" className="myContainer  py-4 md:py-6 lg:py-12 2xl:py-14 bg-[#f1f6f2]">
      {/* <h2 className="font-bold md:text-xl text-lg py-4 md:hidden">Shop Now</h2> */}
      <SectionsTitle className="md:hidden" title="Shop Now" />
      <SwiperSlider
        sectionTitle={"shop-now"}
        products={list.slice(8, 14)}
        renderProduct={RenderProduct}
      />
      <div className=" flex md:justify-between justify-center max-md:flex-col items-start max-md:items-center lg:gap-16 md:gap-6 mx-auto max-md:pt-4">
        {/* PRODUCTS */}
        <div className="flex-grow">
          <SectionsTitle className="max-md:!hidden pb-4" title="Shop Now" />

          <article className="!flex-grow max-md:hidden   gap-2 2xl:gap-5 grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-col-1 ">
            {list.slice(10, cardsCount + 10).map((product) => {
              return (
                <div key={product.id}>
                  <MainCard
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                    description={product.description}
                    rating={product.rating}
                  />
                </div>
              );
            })}
          </article>
        </div>

        {/* ADS */}
        <figure className="w-fit max-md:hidden xl:min-w-[350px] min-w-[300px] !h-full flex max-md:justify-center justify-end">
          <img className="" src="/images/home/Banner-1.webp" loading="lazy" alt="banner" />
        </figure>
      </div>
    </section>
  );
}
