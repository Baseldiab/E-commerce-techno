import Loading from "/images/loading-1.gif";

export default function LoadingLayout() {
  return (
    <section className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <figure>
        <img className="w-fit" src={Loading} alt="banner-e-commerce1" loading="lazy" />
      </figure>
    </section>
  );
}
