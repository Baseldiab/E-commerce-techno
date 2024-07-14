import "./App.css";
import { Outlet } from "react-router-dom";
import DesktopNavbar from "./components/navbar/desktop.navbar";

function App() {
  // const [location] = useLocation();

  // const { isAuthenticated, token } = useAuthStore();

  // console.log(token);

  // useEffect(() => {
  //   if (token !== "") {
  //     <Redirect to="/login" />;
  //   } else <Redirect to="/" />;
  // }, [token, location]);

  return (
    <>
      <div className="min-h-screen m-0 flex flex-col">
        <main className="flex-1">
          {/* <Header /> */}
          <DesktopNavbar />
          <Outlet />
        </main>
        {/* <BottomNav /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
