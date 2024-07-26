import { Link } from "react-router-dom";
import { Banners } from "../data/home.banner.data";

interface Props extends Banners {
  className: string;
}

export default function HomeBannerCardLayout(props: Props) {
  return (
    <section className={`max-w-fit ${props.className}`}>
      <div className="relative">
        <figure className="flex justify-end">
          <img className="max-w-[90%] " src={props.image} alt={props.title} />
        </figure>
        <div className="xl:w-[90%] w-full -ms-3 -mt-14 max-sm:-mt-10">
          <hr className=" w-5 h-0.5 bg-black border-none" />
          <h4 className="xl:text-4xl lg:text-3xl text-2xl font-text font-light md:my-3 my-1.5">
            {props.title}
          </h4>
          <p className="text-secondaryText max-sm:text-sm">{props.text}</p>
          <Link
            title="view more products"
            className="text-black 2xl:text-xl max-sm:text-sm font-semibold flex justify-between gap-1 items-center underline decoration-black underline-offset-2 decoration-2 text-base mt-3"
            color="inherit"
            to={props.link}
          >
            <span className="uppercase ">view more</span>

            {/* <EastIcon className="ms-1" /> */}
          </Link>
        </div>
      </div>
    </section>
  );
}
