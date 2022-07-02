import News from "./Components/News";
import "./App.css";
import Newspost from "./Components/Pages/Newspost";
import { FaNewspaper } from "react-icons/fa";
import { Switch, Route } from "react-router-dom";
import FilterTab from "./Components/FilterTab";
import { NewsProvider } from "./Components/NewsContext/NewsContext";
function App() {
  return (
    <div>
      <NewsProvider>
        <div className="d-flex justify-content-center my-3 align-items-center">
          <FaNewspaper size={30} color="purple" />
          <h1 className="text-3xl font-bold underline text-center linear-wipe">
            News O'Clock!
          </h1>
        </div>
        <FilterTab />
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/post/:id" component={Newspost} />
        </Switch>
      </NewsProvider>
    </div>
  );
}

export default App;
