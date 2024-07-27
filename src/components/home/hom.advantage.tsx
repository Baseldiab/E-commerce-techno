import { advantages } from "../data/home.advantage.data";
import HomeAdvantageItem from "../layout/HomeAdvantageItem";

export default function HomAdvantage() {
  return (
    <section
      id="HomAdvantage"
      className="myContainer grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-4 py-4 md:py-6 lg:py-12 2xl:py-14"
    >
      {advantages.map((item, index) => (
        <div key={`advantage-${item.title}-${index}`}>
          <HomeAdvantageItem title={item.title} text={item.text} image={item.image} />
        </div>
      ))}
    </section>
  );
}
