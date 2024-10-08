import { Link } from "react-router-dom";
import { CategoriesType } from "../data/categories.data";

interface Props extends CategoriesType {
  className?: string;
}

export default function CategoriesSectionItem(props: Props) {
  return (
    <Link className={props.className} to={props.link}>
      <figure className="relative group overflow-hidden">
        <img
          className="group-hover:scale-[1.15] w-full transition-all duration-300 ease-in brightness-[0.95]"
          src={props.image}
          alt="Lighten image"
          loading="lazy"
        />
        <figcaption className="absolute -bottom-6 left-4 group-hover:bottom-2 transition-all duration-300 ease-in">
          <h4 className="xl:text-4xl lg:text-3xl text-2xl capitalize font-text font-light mb-2">
            {props.title}
          </h4>
          <p className="text-gray-600 capitalize">{props.text}</p>
        </figcaption>
      </figure>
    </Link>
  );
}
