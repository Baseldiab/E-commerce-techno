import { useProductStore } from "../../store/products";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";
import { RenderProduct } from "../global/renderProducts";
import { useMemo } from "react";
import useWindowWidth from "../hooks/calc_width_of_screen";
import { getWindowCardsCountHomeDeals } from "../util";
import SectionsTitle from "../title/sectionsTitle";

export default function HomeDeals() {
  //   STORE
  const { list } = useProductStore();

  const windowWidth = useWindowWidth();

  const cardsCount = useMemo(() => getWindowCardsCountHomeDeals(windowWidth), [windowWidth]);

  return (
    <section id="homeDeals" className="myContainer bg-[#f1f6f2] py-4 md:py-6 lg:py-12 2xl:py-14">
      <SectionsTitle title="Best Deals" link="/products" linkTitle="See All" />

      <SwiperSlider sectionTitle={"deals"} products={list} renderProduct={RenderProduct} />

      {/* PRODUCTS */}
      <article className="max-md:hidden pt-5 justify-center items-center gap-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 ">
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
        {/* <MainCard /> */}
      </article>
    </section>
  );
}
