import { Link } from "react-router-dom";

type Props = {
  title: string;
  link?: string;
  linkTitle?: string;
  titleClassName?: string;
  className?: string;
};

export default function SectionsTitle(props: Props) {
  return (
    <>
      <div
        className={`max-md:pb-2 ${props.className} ${
          props.link && "flex justify-between items-center"
        }`}
      >
        <h2
          className={`font-light font-title text-lg 2xl:text-4xl lg:text-3xl md:text-xl ${props.titleClassName}`}
        >
          {props.title}
        </h2>
        {/* <h2 className="font-bold text-lg 2xl:text-4xl lg:text-2xl md:text-xl">Best Deals</h2> */}

        {props.link && (
          <Link
            className="text-black 2xl:text-xl font-semibold flex justify-between gap-1 items-center underline decoration-black underline-offset-2 decoration-2 text-base"
            color="inherit"
            to={props.link}
          >
            <span className="uppercase">{props.linkTitle}</span>

            {/* <EastIcon className="ms-1" /> */}
          </Link>
        )}
      </div>
    </>
  );
}
