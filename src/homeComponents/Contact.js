import react , {Component} from 'react'
import pic from './pics/pic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from 'react-parallax'
import {Background} from 'react-parallax'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faAddressBook, faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGooglePlus, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    
    render() { 
        return  <Parallax   strength={800} className="mb-5 paralex" >   
        <div className=" mini_section">
        <div className="overlay">
          <div className="row h-100">
              <div className="col-12 mx-auto my-auto text-center">
              <div className="row mb-5">
                             <div className="col-10 mx-auto text-center"><h3>Connect Socially With Level-Up</h3></div>
                        </div>
                        <div className="col-10 mx-auto">
            <div className="row">
                <div className="col social mr-5"><div className="row h-100"><div className="col mx-auto text-center my-auto"><FontAwesomeIcon className="buy_icon" icon={faFacebook}/></div></div>
                <div className="row"><div className="col mt-2"><p>Like on FaceBook</p></div></div>
                </div>
                <div className="col social mr-5"><div className="row h-100"><div className="col mx-auto text-center my-auto"><FontAwesomeIcon  className="buy_icon" icon={faTwitter}/></div></div>
                <div className="row"><div className="col mt-2"><p>Follow On Twitter</p></div></div></div>
                <div className="col social mr-5"><div className="row h-100"><div className="col mx-auto text-center my-auto"><FontAwesomeIcon className="buy_icon" icon={faGooglePlus}/></div></div>
                <div className="row"><div className="col mt-2"><p>Follow On Google+</p></div></div></div>
                <div className="col social"><div className="row h-100"><div className="col mx-auto text-center my-auto"><FontAwesomeIcon className="buy_icon" icon={faYoutube}/></div></div>
                <div className="row"><div className="col mt-2"><p>Watch on Youtube</p></div></div></div>
            </div>
              </div>
          </div>
          </div>
         </div>
         </div>
        <Background  className="custom-bg">
             <img src={pic} alt="fill murray" />
             
         </Background>
        
        </Parallax>;
    }
}
 
export default Contact;