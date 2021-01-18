import react , {Component} from 'react'
import pic from './pics/pic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from 'react-parallax'
import {Background} from 'react-parallax'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import InfoSection from './InfoSection'
import GameSection from './GameSection';
import CountDown from './CountDown';
import Partners from './Partners';
import BuyFromUs from './BuyFromUs';
import Contact from './Contact';


class Wrapcontent extends Component {
        render() { 

       return<div className="wrap container"> 
       <div className="overlay">
     <InfoSection></InfoSection>
     <GameSection></GameSection>
     <CountDown></CountDown>
     <Partners></Partners>
     <BuyFromUs></BuyFromUs>
     <Contact></Contact>
     </div>
       </div>
    }
}
 
export default Wrapcontent;