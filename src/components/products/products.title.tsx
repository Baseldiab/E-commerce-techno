interface Props {
  title: string;
  text: string;
}

export default function ProductsTitle(props: Props) {
  return (
    <section className=" py-1  mx-auto">
      <h2 className="font-bold font-thinTitle text-lg 2xl:text-4xl lg:text-4xl uppercase md:text-xl md:text-center text-start">
        {props.title}
      </h2>
      <p className="lg:w-[50%] xl:w-[40%] md:w-[60%] sm:text-lg text-base 2xl:text-2xl lg:text-xl mx-auto text-secondaryText font-text md:text-center text-start my-2 lg:mb-8 md:mb-4 mb-4">
        {props.text}
      </p>
    </section>
  );
}
