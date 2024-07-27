export default function HomeBannerOne() {
  return (
    <section
      id="homeBannerOne"
      className="myContainer max-md:flex-wrap flex  justify-center items-center lg:gap-10 md:gap-4
       py-4 md:py-6 lg:py-12 2xl:py-14"
    >
      <figure className="w-fit">
        <img
          src="/images/home/Banner(1)-1.png"
          alt="gradient background cyber monday sales"
          loading="lazy"
        />
      </figure>

      <figure>
        <img
          className="w-fit"
          src="/images/home/Banner(2)-1.png"
          alt="banner-e-commerce1"
          loading="lazy"
        />
      </figure>
    </section>
  );
}
