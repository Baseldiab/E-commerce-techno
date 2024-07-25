import { ReactNode } from "react";

type Props = {
  title: string;
  text: string;
  icon: ReactNode;
};
export default function HomeFeaturesBox(props: Props) {
  return (
    <div className="  flex  justify-start items-start py-1 px-4 lg:min-w-full gap-2 bg-white">
      {props.icon}
      <div className="text-start">
        <p className="font-medium py-1 mx-auto text-start text-base md:text-xl">{props.title}</p>
        <p className="text-gray-500 py-1 mx-auto text-start text-base md:text-xl">{props.text}</p>
      </div>
    </div>
  );
}
