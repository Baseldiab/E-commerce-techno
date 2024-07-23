import "./App.css";
import { Outlet } from "react-router-dom";
import DesktopNavbar from "./components/navbar/desktop.navbar";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/global/scrollToTop";

function App() {
  return (
    <>
      <div className="min-h-screen m-0 flex flex-col">
        <main className="flex-1">
          <ScrollToTop />
          <DesktopNavbar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
