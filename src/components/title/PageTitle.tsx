type props = {
  title: string;
};

export default function PageTitle(props: props) {
  return (
    <h1 className="font-pageTitle font-bold md:text-3xl sm:text-2xl text-xl py-4 uppercase text-center">
      {props.title}
    </h1>
  );
}
