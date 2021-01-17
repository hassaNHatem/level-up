import react , {Component} from 'react'
import pic from './pics/pic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from 'react-parallax'
import {Background} from 'react-parallax'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class InfoSection extends Component {
    
    render() { 
        return   <Parallax   strength={800} className="mb-5 paralex" >
            
        <div className=" section">
        <div className="overlay"> 
            <div className='col-lg-6 col-sm-12  infoContainer ml-lg-5'>
         <h1 className='row my-auto mx-auto txt'>Clan war:</h1>
         <h1 className='row my-auto mx-auto txt2'>GLOBAL ESPORT CUP</h1>
         <h5 className='row my-auto mx-auto txt3'>vertus pro vs team secret</h5>
         <button className="botn"><p>Learn More</p></button>
         </div>
            <div className='slider'>
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
            </div>
            </div>
         </div>
        <Background  className="custom-bg">
             <img src={pic} alt="fill murray" />
             
         </Background>
        
        </Parallax>
       
    }
}
 
export default InfoSection;