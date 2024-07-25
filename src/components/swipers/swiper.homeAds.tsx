// import { Swiper, SwiperSlide } from "swiper/react";
// import FirstImg from "/images/home/swiper-1.jpg";
// import SecondImg from "/images/home/swiper-2.jpg";
// import ThirdImg from "/images/home/swiper-3.jpg";
// import { EffectFade, Navigation } from "swiper/modules";
// import { Button } from "@mui/material";
// import { SlArrowLeft } from "react-icons/sl";
// import { SlArrowRight } from "react-icons/sl";
// import { Link } from "react-router-dom";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface HomeProps {
//   id: number;
//   topText: string;
//   bottomText: string;
//   image: string;
//   link: string;
// }

// const homeAds: HomeProps[] = [
//   {
//     id: 0,
//     topText: "Multicoloured",
//     bottomText: "Tie-dye Sweater",
//     image: FirstImg,
//     link: "products/category/women's clothing",
//   },
//   {
//     id: 1,
//     topText: "Black Crew Cut",
//     bottomText: "Dress in Cut Style",
//     image: SecondImg,
//     link: "products/category/women's clothing",
//   },
//   {
//     id: 2,
//     topText: "The Shirt Is a",
//     bottomText: "Staple for Man`s",
//     image: ThirdImg,
//     link: "products/category/men's clothing",
//   },
// ];

// export default function SwiperHomeAds() {
//   return (
//     <>
//       <Swiper
//         spaceBetween={30}
//         effect={"fade"}
//         loop={true}
//         //   navigation={true}
//         navigation={{
//           nextEl: ".button-next",
//           prevEl: ".button-prev",
//         }}
//         modules={[EffectFade, Navigation]}
//         className="mySwiper w-full my-6 !relative"
//       >
//         {homeAds.map((item, index) => (
//           <SwiperSlide key={`homeAds-swiper-${item.id}-${index}`} className="!relative">
//             <img className="w-full " src={item.image} alt={`${item.topText} ${item.bottomText}`} />

//             <div
//               className="swiper__text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//               data-aos="fade-left"
//               data-aos-anchor="#example-anchor"
//               data-aos-offset="500"
//               data-aos-duration="500"
//             >
//               <h2 className="lg:text-5xl md:text-3xl text-xl my-3">{item.topText}</h2>
//               <h2 className="lg:text-5xl md:text-3xl text-xl my-3">{item.bottomText}</h2>
//               <Link className="text-base uppercase underline mt-2" to={item.link}>
//                 shop now
//               </Link>
//             </div>
//           </SwiperSlide>
//         ))}

//         <div className="absolute top-1/2 left-1 transform -translate-y-1/2 z-40">
//           <Button className="button-prev !h-8 !min-w-8 !W-8 !p-0 !rounded-full">
//             <SlArrowLeft className="text-xl text-black" />
//           </Button>
//         </div>
//         <div className=" absolute top-1/2 right-1 transform -translate-y-1/2 z-40">
//           <Button className="button-next !rounded-full !h-8 !min-w-8 !W-8 !p-0 ">
//             <SlArrowRight className="text-xl text-black" />
//           </Button>
//         </div>
//       </Swiper>
//     </>
//   );
// }

import { Swiper, SwiperSlide } from "swiper/react";
import FirstImg from "/images/home/swiper-1.jpg";
import SecondImg from "/images/home/swiper-2.jpg";
import ThirdImg from "/images/home/swiper-3.jpg";
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

interface HomeProps {
  id: number;
  topText: string;
  bottomText: string;
  image: string;
  link: string;
}

const homeAds: HomeProps[] = [
  {
    id: 0,
    topText: "Multicoloured",
    bottomText: "Tie-dye Sweater",
    image: FirstImg,
    link: "products/category/women's clothing",
  },
  {
    id: 1,
    topText: "Black Crew Cut",
    bottomText: "Dress in Cut Style",
    image: SecondImg,
    link: "products/category/women's clothing",
  },
  {
    id: 2,
    topText: "The Shirt Is a",
    bottomText: "Staple for Man`s",
    image: ThirdImg,
    link: "products/category/men's clothing",
  },
];

export default function SwiperHomeAds() {
  // State to track the current slide
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlideIndex((prevIndex) => (prevIndex === homeAds.length - 1 ? 0 : prevIndex + 1));
  //   }, 2500);

  //   return () => clearInterval(interval);
  // }, [homeAds.length]);

  const fadeUpTransitions = useTransition(homeAds[currentSlideIndex], {
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
        {homeAds.map((item, index) => {
          // Create unique spring animation for each slide
          // const springProps = useSpring({
          //   opacity: index === currentIndex ? 1 : 0,
          //   transform: index === currentIndex ? "translateX(0%)" : "translateX(100%)",
          //   config: { duration: 500 },
          // });

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
