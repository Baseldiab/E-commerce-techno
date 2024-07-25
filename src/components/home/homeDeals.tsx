import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { useProductStore } from "../../store/products";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";
import { RenderProduct } from "../global/renderProducts";
import { useMemo } from "react";
import useWindowWidth from "../hooks/calc_width_of_screen";
import { getWindowCardsCountHomeDeals } from "../util";

export default function HomeDeals() {
  //   STORE
  const { list } = useProductStore();

  const windowWidth = useWindowWidth();

  const cardsCount = useMemo(() => getWindowCardsCountHomeDeals(windowWidth), [windowWidth]);

  return (
    <section id="homeDeals" className="myContainer py-8">
      <div className="flex justify-between items-center max-md:pb-4">
        <h2 className="font-bold text-lg 2xl:text-4xl lg:text-2xl md:text-xl">Best Deals</h2>
        <Link
          className="text-primary 2xl:text-2xl md:text-xl text-base flex justify-between gap-1 items-center"
          color="inherit"
          to="/products"
        >
          <span className="capitalize">See All</span>

          <EastIcon className="ms-1" />
        </Link>
      </div>

      <SwiperSlider sectionTitle={"deals"} products={list} renderProduct={RenderProduct} />

      {/* PRODUCTS */}
      <article className="max-md:hidden pt-5 justify-center items-center gap-2 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 ">
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
