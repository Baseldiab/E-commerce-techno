import { ReactNode } from "react";

type Props = {
  text: string;
  icon: ReactNode;
};
export default function ProductDetailsBox(props: Props) {
  return (
    <div className="shadow-md rounded-md border flex flex-col justify-center items-center py-4 px-4 max-md:!min-w-[240px]">
      {props.icon}
      <p className="font-medium py-1 mx-auto text-center">{props.text}</p>
    </div>
  );
}
