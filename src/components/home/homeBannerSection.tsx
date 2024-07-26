import { homeBanners } from "../data/home.banner.data";
import HomeBannerCardLayout from "../layout/HomeBannerCardLayout";

export default function HomeBannerSection() {
  return (
    <section className="myContainer grid grid-cols-3 ">
      <HomeBannerCardLayout
        className=""
        id={homeBanners[0].id}
        title={homeBanners[0].title}
        text={homeBanners[0].text}
        image={homeBanners[0].image}
        link={homeBanners[0].link}
      />
    </section>
  );
}
