import react , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import 'react-bootstrap'
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartPlus, faGamepad, faUser } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from 'react-bootstrap';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu(){
        this.setState({ menu: !this.state.menu })
      }
        render() {
            const show = (this.state.menu) ? "show" : "" ;
            const navbar = <nav className="navbar navbar-expand-md navbar-fixed-top nav">
                    <div className="container">
                        <div className="navbar-brand">
                        <FontAwesomeIcon icon={faGamepad} className="gamebad" pull={'left'} ></FontAwesomeIcon>
                        <h1 className="title">Level Up</h1>
                        </div>
                        <button className="navbar-toggler " onClick={ this.toggleMenu }><span className="navbar-toggler-icon" ><FontAwesomeIcon icon={faBars} color='white'></FontAwesomeIcon></span></button>
                        <div className={"collapse navbar-collapse " + show}>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <a href='#' className="nav-link"><FontAwesomeIcon icon={faUser} color='white'></FontAwesomeIcon></a>
                            </li>
                            <li className='nav-item'>
                                <a href='#' className="nav-link"><FontAwesomeIcon icon={faCartPlus} color='white'></FontAwesomeIcon></a>
                            </li>
                          
                        </ul>
                        </div>
                    </div>
                    </nav>
                     
       return navbar  
    }
}
 
export default Navbar;