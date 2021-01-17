import react , {Component} from 'react'
import pic from './pics/pic.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Parallax} from 'react-parallax'
import {Background} from 'react-parallax'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
class Partners extends Component {
    
    render() { 
        return    <Parallax   strength={800} className="mb-5 paralex" >   
        <div className=" mini_section">
        <div className="overlay">
            <div className="row h-100"> 
            <div className="col-12 mx-auto my-auto">
<div className="row mx-auto mb-4">
    <div className="col-12"><h1 style={{'color':'white'}}>PARTNERS</h1></div>
</div>
<div className="row mx-auto">
    <div className="col  logo_container"><img src='https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3-500x333.png'></img></div>
    <div className="col logo_container"><img src='https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3-500x333.png'></img></div>
    
    <div className="col logo_container"><img src='https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3-500x333.png'></img></div>
    
    <div className="col logo_container"><img src='https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3-500x333.png'></img></div>
    
    <div className="col logo_container"><img src='https://wp.nkdev.info/youplay/wp-content/uploads/2015/10/partner-logo-3-500x333.png'></img></div>
    
    
</div>
</div>
         </div>
         </div>
         </div>
        <Background  className="custom-bg">
             <img src={pic} alt="fill murray" />
             
         </Background>
        
        </Parallax>
         ;
    }
}
 
export default Partners;