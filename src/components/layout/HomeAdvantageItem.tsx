import { Advantages } from "../data/home.advantage.data";

export default function HomeAdvantageItem(props: Advantages) {
  return (
    <div className="flex flex-col justify-center">
      <figure className="flex justify-center ">
        <img className="w-fit" src={props.image} alt={props.text} />
      </figure>
      <h5 className="text-center my-2">{props.title}</h5>
      <p className="text-center text-secondaryText">{props.text}</p>
    </div>
  );
}
