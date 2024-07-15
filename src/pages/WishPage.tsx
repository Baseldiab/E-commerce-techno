import MainCard from "../components/products/mainCard";
import PageTitle from "../components/title/PageTitle";
import WishEmpty from "../components/wish/wishEmpty";
import { useWishStore } from "../store/wish";

export default function WishPage() {
  const { wishList } = useWishStore();
  return (
    <>
      <PageTitle title="WishList" />
      <section className="py-6 shadow-md">
        {wishList.length === 0 ? (
          <WishEmpty />
        ) : (
          <div className="myContainer gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-col-1">
            {wishList.slice(0, 8).map((product) => {
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
                    isWishPage={true}
                  />
                </div>
              );
            })}
            {/* <MainCard /> */}
          </div>
        )}
      </section>
      ;
    </>
  );
}
