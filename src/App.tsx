import "./App.css";
import { Route, Router, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function App() {
  // const [location] = useLocation();

  return (
    <>
      <Router>
        <Switch>
          <main>
            <Route path="/" component={HomePage} />

            <Route path="/login" component={LoginPage} />

            <Route path="/:rest*" component={NotFoundPage} />
          </main>
        </Switch>
      </Router>
    </>
  );
}

export default App;
