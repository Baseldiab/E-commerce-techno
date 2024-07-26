import { Banners } from "../data/home.banner.data";

interface Props extends Banners {
  className: string;
}

export default function HomeBannerCardLayout(props: Props) {
  return (
    <section className={` ${props.className}`}>
      <div className="relative">
        <figure className="">
          <img className="w-fit" src={props.image} alt={props.title} />
        </figure>
        <div className="w-[70%] -translate-x-[18%] -translate-y-[43%] ">
          <hr className="w-7 h-0.5 bg-black border-none" />
          <h4 className="text-3xl font-thinTitle font-light my-3">{props.title}</h4>
          <p className="text-secondaryText">{props.text}</p>
        </div>
      </div>
    </section>
  );
}
