import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import { randomNumber } from "../util";

type SwiperSliderProps<T> = {
  products: T[];
  renderProduct: (product: T, index: number) => React.ReactNode;
  sectionTitle: string;
};

export default function SwiperSlider<T>({
  products,
  renderProduct,
  sectionTitle,
}: SwiperSliderProps<T>) {
  return (
    <article>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={5}
        loop={true}
        centeredSlides={true}
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        //   "@0.75": {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   "@1.00": {
        //     slidesPerView: 3,
        //     spaceBetween: 30,
        //   },
        //   "@1.50": {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        //   },
        // }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper md:hidden  px-6 relative"
      >
        {products.map((product, index) => (
          <SwiperSlide
            className="!w-[250px]"
            key={`swiper-product-${index}-${sectionTitle}-${randomNumber}`}
          >
            {renderProduct(product, index)}
          </SwiperSlide>
        ))}

        <div className="max-sm:hidden absolute top-1/2 left-0 transform -translate-y-1/2 z-40">
          <Button className="button-prev !h-8 !min-w-8 !W-8 !p-0 !rounded-full !bg-secondary">
            <ArrowBackIcon className=" text-white" />
          </Button>
        </div>
        <div className="max-sm:hidden absolute top-1/2 right-0 transform -translate-y-1/2 z-40">
          <Button className="button-next !rounded-full !h-8 !min-w-8 !W-8 !p-0 !bg-secondary">
            <ArrowForwardIcon className="text-xl text-white" />
          </Button>
        </div>
      </Swiper>
    </article>
  );
}
