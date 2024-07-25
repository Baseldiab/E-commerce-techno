import { useProductStore } from "../../store/products";
import { RenderProduct } from "../global/renderProducts";
import MainCard from "../products/mainCard";
import SwiperSlider from "../swipers/swiper.slider";

export default function HomeShopNow() {
  //   STORE
  const {
    list,
    // categories,
    // sendGetProductsList,
    // sendGetCategoriesList,
    // sendGetCategoryProducts,
    // sendGetSearchList,
  } = useProductStore();

  return (
    <section id="homeShopNow" className="myContainer  py-8 bg-featuresBg">
      <h2 className="font-bold md:text-xl text-lg py-4 md:hidden">Shop Now</h2>
      <SwiperSlider
        sectionTitle={"shop-now"}
        products={list.slice(8, 14)}
        renderProduct={RenderProduct}
      />
      <div className="flex md:justify-between justify-center max-md:flex-col items-start max-md:items-center lg:gap-16 md:gap-6 mx-auto max-md:pt-4">
        {/* PRODUCTS */}
        <div className="flex-grow">
          <h2 className="font-bold text-lg  lg:text-3xl md:text-2xl pb-4 max-md:hidden">
            Shop Now
          </h2>

          <article className="max-md:hidden col-span-2  gap-5 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-col-1 ">
            {list.slice(8, 14).map((product) => {
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
        <figure className="w-full !h-full max-md:flex max-md:justify-center">
          <img
            className="lg:!min-w-fit min-w-full !h-auto"
            src="/images/home/Banner-1.png"
            alt="banner"
          />
        </figure>
      </div>
    </section>
  );
}
