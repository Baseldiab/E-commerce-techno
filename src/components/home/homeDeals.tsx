import { Link } from "react-router-dom";
import EastIcon from "@mui/icons-material/East";
import { useProductStore } from "../../store/products";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";
import { RenderProduct } from "../global/renderProducts";

export default function HomeDeals() {
  //   STORE
  const { list } = useProductStore();

  return (
    <section id="homeDeals" className="myContainer py-8">
      <div className="flex justify-between items-center max-md:pb-4">
        <h2 className="font-bold text-lg">Best Deals</h2>
        <Link className="text-primary text-base" color="inherit" to="/products">
          See All <EastIcon />
        </Link>
      </div>

      <SwiperSlider sectionTitle={"deals"} products={list} renderProduct={RenderProduct} />

      {/* PRODUCTS */}
      <article className="max-md:hidden pt-5 gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1 ">
        {list.slice(0, 8).map((product) => {
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
