import { useProductStore } from "../../store/products";
import { RenderProduct } from "../global/renderProducts";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";

export default function HomeFeaturesProducts() {
  //   STORE
  const { list } = useProductStore();

  return (
    <section id="homeFeatureProducts" className="myContainer  py-8">
      <div className="flex md:justify-between justify-center items-start max-md:items-center lg:!gap-16 md:!gap-6 mx-auto">
        {/* ADS */}
        <figure className="w-full">
          <img
            className="w-full h-auto mx-auto md:min-w-[300px]"
            src="/images/home/Banner-1.png"
            alt="banner"
          />
        </figure>

        {/* PRODUCTS */}
        <div className="flex-grow">
          <h2 className="font-bold text-lg  lg:text-3xl md:text-2xl pb-4 max-md:hidden">
            Suggested products
          </h2>
          {/* <SwiperProducts list={list.slice(8, 14)} /> */}

          <article className="max-md:hidden col-span-2  md:gap-4 gap-3 grid 2xl:grid-cols-4 lg:grid-cols-3  sm:grid-cols-2 grid-col-1 ">
            {list.slice(0, 6).map((product) => {
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
      <h2 className="font-bold md:text-xl text-lg py-4 md:hidden">Suggested products</h2>
      <SwiperSlider
        sectionTitle={"featured-products"}
        products={list.slice(0, 6)}
        renderProduct={RenderProduct}
      />
    </section>
  );
}
