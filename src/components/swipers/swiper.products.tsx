import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import MainCard from "../products/mainCard";
import { ProductModel } from "../types/productModel";

export default function SwiperProducts({ list }: { list: ProductModel[] }) {
  //   STORE
  //   const { list } = useProductStore();

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={5}
        loop={true}
        centeredSlides={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper py-14 md:hidden"
      >
        {list.map((product, index) => (
          <SwiperSlide className="!w-[250px]" key={`${product.title}-${product.id}-${index}`}>
            <MainCard
              id={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
              description={product.description}
              rating={product.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
