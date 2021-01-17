import react , {Component} from 'react'
import pic from './pics/pic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from 'react-parallax'
import {Background} from 'react-parallax'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import InfoSection from './InfoSection'
class GameSection extends Component {

    render() { 
        return<div className='games section '>
            <div className='row mb-3'>
           <div className='col-6 text-left'><h1 className="pl-2">Games</h1></div>
           <div className='col-6 text-right'><button className="seebtn mr-3"><p><h3>see More</h3></p></button></div>
           </div>
           <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                 <div className='slide1'>
                   <div className="overlay">
                   <h2 className='slideTxt'>Dishonored</h2>
                   </div>
                 </div>
                 <div className='slide2'>
                 <div className="overlay">
                     
                     <h2 className='slideTxt'>Assassin's Creed</h2>
                 </div>
                 </div>
                 <div className='slide3'>
                 <div className="overlay">

                     <h2 className='slideTxt'>Control</h2>
                     </div>
                 </div>
             </Carousel>
             <div className='row mt-3 mb-3'>
           <div className='col-6 text-left'><h1 className="pl-2">Discounts</h1></div>
           <div className='col-6 text-right' ><button className="seebtn mr-3"><p><h3>see More</h3></p></button></div>
           </div>
           <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
                 <div className='slide1'>
                   <div className="overlay">
                   <h2 className='slideTxt'>Dishonored</h2>
                   </div>
                 </div>
                 <div className='slide2'>
                 <div className="overlay">
                     
                     <h2 className='slideTxt'>Assassin's Creed</h2>
                 </div>
                 </div>
                 <div className='slide3'>
                 <div className="overlay">

                     <h2 className='slideTxt'>Control</h2>
                     </div>
                 </div>
             </Carousel>
        </div>;
    }
}
 
export default GameSection;