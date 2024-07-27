import { homeBanners } from "../data/home.banner.data";
import HomeBannerCardLayout from "../layout/HomeBannerCardLayout";

export default function HomeBannerSection() {
  return (
    <section className="myContainer h-fit grid lg:gap-32 gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-4 md:py-6 lg:py-12 2xl:py-14">
      <HomeBannerCardLayout
        className="lg:mt-[30%]"
        id={homeBanners[0].id}
        title={homeBanners[0].title}
        text={homeBanners[0].text}
        image={homeBanners[0].image}
        link={homeBanners[0].link}
      />
      <HomeBannerCardLayout
        className="lg:mt-[60%]"
        id={homeBanners[1].id}
        title={homeBanners[1].title}
        text={homeBanners[1].text}
        image={homeBanners[2].image}
        link={homeBanners[1].link}
      />

      <HomeBannerCardLayout
        className="lg:block md:hidden max-md:block"
        id={homeBanners[2].id}
        title={homeBanners[2].title}
        text={homeBanners[2].text}
        image={homeBanners[1].image}
        link={homeBanners[2].link}
      />
    </section>
  );
}
