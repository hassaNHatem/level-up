import react , {Component} from 'react'
import Navbar from './Navbar'
import Wrapcontent from './Wrapcontent'
import 'bootstrap/dist/css/bootstrap.min.css';
class Home extends Component {
        render() { 

       return<div className='home'>  <Navbar className="fixed-top"></Navbar>
      
       <Wrapcontent></Wrapcontent>
       
       </div>
    }
}
 
export default Home;