// Created by Muhammed Ebrahim

import React from 'react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { Parallax } from 'react-parallax';
import Button from '../constant/CommonButton'

const shopSlider = ({games}) => {

    const seeMoreBtn = {
        color:'white', 
        fontWeigth:'400',
        border:'1.9px solid white',
        transform: 'skew(-20deg)',
        padding:'5px 49px',
        marginTop: '7px',
        fontSize:'25px'
    };

    return ( 
        <div className = 'carouselContainer'>
            <Carousel>
                {
                    games.map(game => (

                        <Carousel.Item interval={1000}>
                            <div style={{height:'100vh'}} className="">
                                <Parallax style={{overflow:'visible !important'}} bgImage={game.src} bgImageAlt="the cat">
                                </Parallax>
                            </div>
                            <Carousel.Caption>
                                <h3>{game.title}</h3>
                                <Button style={seeMoreBtn} text={'read more'}/>
                            </Carousel.Caption>
                        </Carousel.Item>
                
                    ))
                }
            </Carousel>
        </div>    
     );
}
 
export default shopSlider;