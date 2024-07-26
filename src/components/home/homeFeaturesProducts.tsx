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
    <section id="homeFeatureProducts" className="myContainer  py-8">
      <div className=" flex md:justify-between justify-center max-md:flex-col items-start max-md:items-center lg:gap-16 md:gap-6 mx-auto max-md:pt-4">
        {/* ADS */}
        <figure className="max-md:hidden w-fit xl:min-w-[350px] min-w-[300px] !h-full justify-start flex max-md:justify-center">
          <img className="" src="/images/home/Banner-1.png" alt="banner" />
        </figure>

        {/* PRODUCTS */}
        <div className="flex-grow">
          {/* <h2 className="font-bold text-lg 2xl:text-4xl lg:text-2xl md:text-xl pb-4 max-md:hidden">
            Suggested products
          </h2> */}
          <SectionsTitle className="max-md:hidden pb-4" title="Suggested products" />
          {/* <SwiperProducts list={list.slice(8, 14)} /> */}

          <article className="!flex-grow max-md:hidden   gap-5 grid 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 grid-col-1">
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
      {/* <h2 className="font-bold md:text-xl text-lg py-4 md:hidden">Suggested products</h2> */}
      <SectionsTitle className="md:hidden" title="Suggested products" />
      <SwiperSlider
        sectionTitle={"featured-products"}
        products={list.slice(0, 6)}
        renderProduct={RenderProduct}
      />
    </section>
  );
}
