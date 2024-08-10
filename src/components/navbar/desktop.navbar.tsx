import MainNavbar from "./navbarComponents/mainNavbar";
import MobileNavbar from "./navbarComponents/mobileNavbar";

export default function DesktopNavbar() {
  return (
    <nav>
      <MainNavbar />
      <MobileNavbar />
    </nav>
  );
}
