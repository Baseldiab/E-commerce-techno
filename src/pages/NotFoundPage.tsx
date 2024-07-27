import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>E-commerce Techno | Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist. Check out our other products and categories at E-commerce Techno."
        />
      </Helmet>

      <section className="fixed inset-0 flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-background text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center  md:text-3xl">
                <span className="text-red-500">Oops!</span> <span>Page not found</span>
              </p>
              <p className="mb-8 text-center md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link
                to={"/"}
                className="inline-block bg-background p-2 text-secondary rounded-md"
                reloadDocument
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
