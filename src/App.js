import './App.css';
import Home from './homeComponents/Home'
import Navbar from './homeComponents/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Shop from './components/ShopComponents/Shop';
function App() {
  return (
    <Router>
    <div className="App">
      <Route path="/" exact>
      <Home></Home>
      </Route>
      <Route path="/shop">
        <Navbar></Navbar>
    <Shop></Shop>
      </Route>
    </div>
    </Router>
  );
}

export default App;
