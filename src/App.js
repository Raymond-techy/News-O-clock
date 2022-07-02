import News from "./Components/News";
import "./App.css";
import Newspost from "./Components/Pages/Newspost";
import { Switch, Route } from "react-router-dom";
import FilterTab from "./Components/FilterTab";
import { NewsProvider } from "./Components/NewsContext/NewsContext";
function App() {
  return (
    <div>
      <NewsProvider>
        <h1 className="text-3xl font-bold underline text-center my-3 linear-wipe">
          News O'Clock!
        </h1>
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
