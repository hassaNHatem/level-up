// Created by Muhammed Ebrahim

import React, { Component } from 'react';
import Slider from './shopSlider'
import ShopProducts from './shopGrid'
import games from '../data/Games'

class Shop extends Component {
  
    state = {  }

    render() { 
        return (  
            <div style={{backgroundColor: 'rgb(50 44 86 / 98%)'}}>
                <Slider games={games.slice(0,3)}/>
                <ShopProducts games={games}/>
            </div>
        );
    }
}
 
export default Shop ;