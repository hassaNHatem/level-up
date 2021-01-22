import react , {Component} from 'react'
import Navbar from './Navbar'
import Wrapcontent from './Wrapcontent'
import Shop from '../components/ShopComponents/Shop'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
class Home extends Component {
        render() { 

       return<div className='home'>  
               <Navbar className="fixed-top"></Navbar>
               <Wrapcontent></Wrapcontent> 
       </div>
    }
}
 
export default Home;