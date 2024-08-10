import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./components/global/scrollToTop";
import LoadingLayout from "./components/layout/Loading.layout";
import { useGlobalStore } from "./store/global";

const LazyDesktopNavbar = lazy(() => import("./components/navbar/desktop.navbar"));
const LazyTopNavbar = lazy(() => import("./components/navbar/navbarComponents/topNavbar"));
const LazyFooter = lazy(() => import("./components/footer/footer"));

function App() {
  const { loading } = useGlobalStore();

  return (
    <>
      <div className="min-h-screen m-0 flex flex-col">
        <main className="flex-1">
          <ScrollToTop />

          <Suspense fallback={<LoadingLayout />}>
            <LazyTopNavbar />
            <LazyDesktopNavbar />
          </Suspense>

          <Suspense fallback={<LoadingLayout />}>
            {loading ? (
              <LoadingLayout />
            ) : (
              <>
                <Outlet />
              </>
            )}
          </Suspense>
        </main>

        <Suspense fallback={<LoadingLayout />}>
          <LazyFooter />
        </Suspense>
      </div>
    </>
  );
}

export default App;
