import { Link } from "react-router-dom";
import { useProductStore } from "../../store/products";

export default function HomeShopWithCategory() {
  //   STORE
  const {
    categories,
    // list,
    // sendGetProductsList,
    // sendGetCategoriesList,
    // sendGetCategoryProducts,
    // sendGetSearchList,
  } = useProductStore();

  const images = [
    "/images/home/electtonics.png",
    "/images/home/alex-chambers-TxCbfMc854c-unsplash.jpg",
    "/images/home/2-3-600x675.jpg",
    "/images/home/1-1-600x675.jpg",
  ];

  console.log(categories);

  return (
    <section className="myContainer my-6  py-6 bg-featuresBg">
      <h2 className="text-center font-bold md:text-xl text-lg py-2">Shop with Category</h2>

      <div className="py-3 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
        {categories.map((item, index) => (
          <Link key={`home-categories-${index + 1}`} to={`/products/category/${item}`}>
            <figure className="bg-white py-2">
              <img className="p-4 mx-auto" src={images[index]} alt={item} />
              <figcaption className="text-center mx-auto capitalize">{item}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}
