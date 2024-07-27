import { Link } from "react-router-dom";
import { useProductStore } from "../../store/products";
import SwiperSlider from "../swipers/swiper.slider";
import SectionsTitle from "../title/sectionsTitle";

const images = [
  "/images/home/electtonics.png",
  "/images/home/alex-chambers-TxCbfMc854c-unsplash.jpg",
  "/images/home/2-3-600x675.jpg",
  "/images/home/1-1-600x675.jpg",
];

function RenderCategory(item: string, index: number) {
  return (
    <Link to={`/products/category/${item}`}>
      <figure className="bg-white py-2 lg:py-4">
        <img className="p-4 mx-auto" src={images[index]} loading="lazy" alt={item} />
        <figcaption className="text-center mx-auto capitalize">{item}</figcaption>
      </figure>
    </Link>
  );
}

export default function HomeShopWithCategory() {
  //   STORE
  const { categories } = useProductStore();

  return (
    <section id={"homeShopWithCategory"} className="myContainer   py-8 bg-featuresBg">
      {/* <h2 className="text-center font-bold text-lg 2xl:text-4xl lg:text-2xl md:text-xl md:mb-4 pb-4">
        Shop with Category
      </h2> */}

      <SectionsTitle
        className="text-center"
        titleClassName="md:mb-4 pb-4"
        title="Shop with Category"
      />

      <SwiperSlider
        sectionTitle={"shop-with-category"}
        products={categories}
        renderProduct={(item: string, index: number) => RenderCategory(item, index)}
      />

      <div className="max-md:hidden grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 myContainer md:gap-6 gap-3">
        {categories.map((item, index) => (
          <Link
            // className="max-w-[400px]"
            key={`home-categories-${index + 1}`}
            to={`/products/category/${item}`}
          >
            <figure className="bg-white py-2 lg:py-4">
              <img loading="lazy" className="p-4 mx-auto" src={images[index]} alt={item} />
              <figcaption className="text-center mx-auto capitalize lg:text-xl md:text-base text-base font-semibold">
                {item}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
}
