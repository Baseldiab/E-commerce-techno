import { useProductStore } from "../../store/products";
import MainCard from "../products/mainCard";

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
      <div className="flex md:justify-between  !justify-center max-md:flex-col items-start max-md:items-center lg:gap-16 gap-6 mx-auto">
        {/* PRODUCTS */}
        <div className="basis-2/3">
          <h2 className="font-bold md:text-xl text-lg pb-4">Shop Now</h2>

          <article className=" col-span-2  gap-5 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-col-1 ">
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
        <figure className=" !h-full">
          <img className="!h-full" src="/images/home/Banner-1.png" alt="banner" />
        </figure>
      </div>
    </section>
  );
}
