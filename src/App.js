import "./App.css";
import Banner from "./components/Banner/Banner";
import { Switch, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage/TodoPage";
import FollowersPage from "./pages/FollowersPage/FollowersPage";

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" element={TodoPage} />
        <Route strict exact path="/followers" element={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;
