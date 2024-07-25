import MainCard from "./mainCard";
import { ProductModel } from "../types/productModel";

export default function SimilarProducts({ list }: { list: ProductModel[] }) {
  return (
    <section className="myContainer py-3 max-md:hidden">
      <h2 className="text-lg xl:text-4xl lg:text-3xl font-bold capitalize mb-5">
        Similar Products
      </h2>

      <div className=" gap-5 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-col-1">
        {list.slice(0, 8).map((product: ProductModel) => {
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
      </div>
    </section>
  );
}
