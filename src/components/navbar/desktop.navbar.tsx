import MainNavbar from "./navbarComponents/mainNavbar";
import MobileNavbar from "./navbarComponents/mobileNavbar";
import TopNavbar from "./navbarComponents/topNavbar";

export default function DesktopNavbar() {
  return (
    <nav>
      <TopNavbar />
      <MainNavbar />
      <MobileNavbar />
    </nav>
  );
}
