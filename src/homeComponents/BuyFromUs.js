import react , {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { faCreditCard, faDollarSign, faGamepad, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class BuyFromUs extends Component {
    
    render() { 
        return <div className="mini_section buy mb-5">
          <div className="overlay">
              <div className="row h-100">
                    <div className="col-12 mx-auto my-auto">
                        <div className="row mb-5">
                            <div className="col-10 mx-auto text-left"><h1>Why Buy From Us</h1></div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-4 mb-5 reason ml-5 mr-5"><div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                    <FontAwesomeIcon className="buy_icons" icon={faCreditCard}  pull={'center'} ></FontAwesomeIcon>
                                       
                                    </div>
                                    <div className="col-12">
                                    <h3>Payment</h3>
                                       
                                    </div>
                                    <div className="col-12">
                                    <p>More than 10 payment systems</p>
                                       
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-4 mb-5 reason ml-5 mr-5"><div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                    <FontAwesomeIcon className="buy_icons" icon={faGamepad}  pull={'center'} ></FontAwesomeIcon>
                                       
                                    </div>
                                    <div className="col-12">
                                    <h3>games</h3>
                                       
                                    </div>
                                    <div className="col-12">
                                    <p>Large Number of Games</p>
                                       
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-4 mb-5 reason ml-5 mr-5"><div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                    <FontAwesomeIcon className="buy_icons" icon={faDollarSign}  pull={'center'} ></FontAwesomeIcon>
                                       
                                    </div>
                                    <div className="col-12">
                                    <h3>Cheap</h3>
                                       
                                    </div>
                                    <div className="col-12">
                                    <p>Lowest Prices</p>
                                       
                                    </div>
                                </div>
                                </div>
                                </div>
                                <div className="col-lg-2 col-md-4 mb-5 reason ml-5 mr-5"><div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                    <FontAwesomeIcon className="buy_icons" icon={faPeopleArrows}  pull={'center'} ></FontAwesomeIcon>
                                       
                                    </div>
                                    <div className="col-12">
                                    <h3>community</h3>
                                       
                                    </div>
                                    <div className="col-12">
                                    <p>Largest gamming coummunity</p>
                                       
                                    </div>
                                </div>
                                </div>
                                </div>
                        </div>
                    </div>
              </div>
          </div>
        </div>
    }
}
 
export default BuyFromUs;
