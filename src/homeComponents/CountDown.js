import react , {Component} from 'react'
import pic from './pics/pic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from 'react-parallax'
import {Background} from 'react-parallax'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class CountDown extends Component {

    render() { 
        return   <Parallax   strength={600} className="mb-5 paralex" >
        <div className=" section">
            <div className='overlay'>
                <div className="row h-100">
                <div className="col-12  h-50 mx-auto my-auto prerelease">                <div className="row">
                    <div className="col-12 text-center mx-auto">
                        <h1>The Witcher3</h1>
        </div>
        </div>
        <div className="row">
            <div className="col-12 text-center mb-4">
                <h2>Wild Hunt</h2>
            </div>
        </div>
        <div className="row mb-5">
            <div className="col-lg-3 col-sm-6 col-xs-3">
                <div className="row"><div className="col-12 text-center">Days</div></div>
                <div className="row"><div className="col-6 mx-auto text-center num"><h1 className="">00</h1></div></div>

            </div>
            <div className="col-lg-3 col-sm-6 col-xs-3">
                <div className="row"><div className="col-12 text-center">Hours</div></div>
                <div className="row"><div className="col-6 mx-auto text-center num"><h1>00</h1></div></div>

            </div>
            <div className="col-lg-3 col-sm-6 col-xs-3">
                <div className="row"><div className="col-12 text-center">Minutes</div></div>
                <div className="row"><div className="col-6 mx-auto text-center num"><h1>00</h1></div></div>

            </div>
            <div className="col-lg-3 col-sm-6 col-xs-3">
                <div className="row"><div className="col-12 text-center">Second</div></div>
                <div className="row"><div className="col-6 mx-auto text-center num"><h1>00</h1></div></div>

            </div>
        </div>
        <div className="row ">
            <div className="col-2 text-center mx-auto">
                <div className="botn mx-auto bn">Purchase</div>
            </div>
        </div>
        </div>
        </div>
         </div>
         </div>
        <Background  className="custom-bg">
             <img src={pic} alt="fill murray" />
             
         </Background>
      
        </Parallax>
    }
}
 
export default CountDown;