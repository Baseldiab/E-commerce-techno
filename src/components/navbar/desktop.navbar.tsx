import MainNavbar from "./navbarComponents/mainNavbar";
import TopNavbar from "./navbarComponents/topNavbar";

export default function DesktopNavbar() {
  return (
    <nav>
      <TopNavbar />
      <MainNavbar />
    </nav>
  );
}
