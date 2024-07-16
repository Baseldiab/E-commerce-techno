import { useProductStore } from "../../store/products";
import MainCard from "../products/mainCard";

export default function HomeFeaturesProducts() {
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
    <section id="homeFeatureProducts" className="myContainer  py-8">
      <div className="flex md:justify-between justify-center max-md:flex-col items-start gap-6 ">
        {/* ADS */}
        <figure className=" !h-full">
          <img className="!h-full" src="/images/home/Banner-1.png" alt="banner" />
        </figure>

        {/* PRODUCTS */}
        <div className="basis-2/3">
          <h2 className="font-bold md:text-xl text-lg pb-4">Suggested products</h2>

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
      </div>
    </section>
  );
}
