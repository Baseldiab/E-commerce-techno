import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
};

export default function CheckoutRadioLabel(props: Props) {
  return (
    <div className="flex flex-col justify-center items-center p-3">
      {props.icon}
      <p className="p-2 text-center">{props.text}</p>
    </div>
  );
}
