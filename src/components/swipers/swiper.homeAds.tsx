import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Autoplay } from "swiper/modules";
import { Button } from "@mui/material";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web"; // Import React Spring
import { useState } from "react";
import { swiperHomeAdsData } from "../data/swiper.home.ads.data";

export default function SwiperHomeAds() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const fadeUpTransitions = useTransition(swiperHomeAdsData[currentSlideIndex], {
    from: { opacity: 0, transform: "translateX(-10%)" },
    enter: { opacity: 1, transform: "translateX(-50%)" },
    config: { duration: 1000 },
  });

  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        // loop={true}
        centeredSlides={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper w-full my-6 !relative"
        onSlideChange={(swiper) => setCurrentSlideIndex(swiper.activeIndex)}
      >
        {swiperHomeAdsData.map((item, index) => {
          return (
            <SwiperSlide key={`homeAds-swiper-${item.id}-${index}`} className="!relative">
              <img className="w-full" src={item.image} alt={`${item.topText} ${item.bottomText}`} />
              {currentSlideIndex === index &&
                fadeUpTransitions((styles, ele) => (
                  <animated.div
                    className="swiper__text absolute !top-[35%] left-1/2 -translate-x-1/2 -translate-y-2/2 text-start"
                    style={styles}
                  >
                    <h2 className="xl:text-6xl lg:text-5xl md:text-3xl sm:text-xl text-lg md:my-3 my-1">
                      {ele.topText}
                    </h2>
                    <h2 className="xl:text-6xl lg:text-5xl md:text-3xl sm:text-xl text-lg md:my-3 my-1">
                      {ele.bottomText}
                    </h2>
                    <Link className="text-base uppercase underline md:mt-2 mt-0.5" to={ele.link}>
                      shop now
                    </Link>
                  </animated.div>
                ))}
            </SwiperSlide>
          );
        })}

        <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-40">
          <Button className="button-prev !h-8 !min-w-8 !W-8 !p-0 !rounded-full">
            <SlArrowLeft className="text-xl text-black" />
          </Button>
        </div>
        <div className="absolute top-1/2 right-1 transform -translate-y-1/2 z-40">
          <Button className="button-next !rounded-full !h-8 !min-w-8 !W-8 !p-0">
            <SlArrowRight className="text-xl text-black" />
          </Button>
        </div>
      </Swiper>
    </>
  );
}
