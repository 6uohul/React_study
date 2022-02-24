import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, //브라우저 새로고침 없이 이동
} from "react-router-dom"; 
import Detail from "./routes/Detail";
import Home from "./routes/Home";

//Router를 render
function App() {
  return <Router>
    <Switch>
      <Route path="/movie">
        <Detail />
      </Route>
      <Route path="/"> 
        <Home />
      </Route>
    </Switch>
  </Router>
};
export default App;