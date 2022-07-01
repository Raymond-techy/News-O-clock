import News from "./Components/News";
import "./App.css";
import Newspost from "./Components/Pages/Newspost";
import { Switch, Route } from "react-router-dom";
import { NewsProvider } from "./Components/NewsContext/NewsContext";
function App() {
  return (
    <div>
      <NewsProvider>
        <Switch>
          <Route path="/" exact component={News} />
          <Route path="/post/:id" component={Newspost} />
        </Switch>
      </NewsProvider>
    </div>
  );
}

export default App;
