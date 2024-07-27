export default function HomeAds() {
  return (
    <header
      id="homeAds"
      className="myContainer max-md:flex-wrap flex  justify-center items-center gap-6 my-8"
    >
      <figure
      //   className=""
      >
        <img
          src="/images/home/gradient-background-cyber-monday-sales_52683-142802 1.png"
          alt="gradient background cyber monday sales"
          loading="lazy"
        />
      </figure>

      <figure className="flex flex-col justify-between items-center gap-5">
        <img
          //   className="order-first"
          src="/images/home/pngtree-ecommerce-banner-planning-segmentation-selection-image_1316202 1.png"
          alt="pngtree ecommerce banner planning segmentation"
          loading="lazy"
        />

        <img
          //   className=""
          src="/images/home/banner-e-commerce1 1.png"
          alt="banner-e-commerce1"
          loading="lazy"
        />
      </figure>
    </header>
  );
}
