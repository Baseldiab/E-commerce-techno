import { useMemo } from "react";
import { useProductStore } from "../../store/products";
import { RenderProduct } from "../global/renderProducts";
import useWindowWidth from "../hooks/calc_width_of_screen";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";
import { getWindowCardsCountHomeProducts } from "../util";
import SectionsTitle from "../title/sectionsTitle";

export default function HomeFeaturesProducts() {
  //   STORE
  const { list } = useProductStore();

  const windowWidth = useWindowWidth();

  const cardsCount = useMemo(() => getWindowCardsCountHomeProducts(windowWidth), [windowWidth]);

  return (
    <section
      id="homeFeatureProducts"
      className="myContainer border-y border-slate-200 py-4 md:py-6 lg:py-12 2xl:py-14"
    >
      <div className=" flex md:justify-between justify-center max-md:flex-col items-start max-md:items-center lg:gap-16 md:gap-6 mx-auto max-md:pt-4 max-md:!hidden">
        {/* ADS */}
        <figure className="max-md:!hidden w-fit xl:min-w-[350px] min-w-[300px] !h-full justify-start flex max-md:justify-center">
          <img className="" src="/images/home/Banner-1.png" alt="banner" />
        </figure>

        {/* PRODUCTS */}
        <div className="flex-grow">
          <SectionsTitle className="max-md:!hidden pb-4" title="Suggested products" />

          <article className="!flex-grow max-md:hidden   gap-2 grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-col-1">
            {list.slice(0, cardsCount).map((product) => {
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
      </div>
      <SectionsTitle className="md:hidden" title="Suggested products" />
      <SwiperSlider
        sectionTitle={"featured-products"}
        products={list.slice(0, 6)}
        renderProduct={RenderProduct}
      />
    </section>
  );
}
