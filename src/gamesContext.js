import React, {Component, createContext} from "react";

export const GamesContext = createContext();


export class GamesProvider extends Component {
   
    state = {  
        games: [
            {
                _id: "5b21ca3eeb7f6fbccd471811",
                title:'Assassin Creed 4',
                src : 'https://wallpaperaccess.com/full/2205773.jpg',
                price: 50.01,
                rate: 3
            },
            {
                _id: "5b21ca3eeb7f6fbccd471812",
                title:'Cyber Punk 2077',
                src : 'https://wallpaperaccess.com/full/676037.jpg',
                price: 12.00,
                rate: 5
            },
            {
                _id: "5b21ca3eeb7f6fbccd471813",
                title:'Call of duty',
                src: 'https://wallpaperaccess.com/full/9132.jpg',
                price: 21.00,
                rate: 4
            }, 
            {
                _id: "5b21ca3eeb7f6fbccd471814",
                title:'Lord of war',
                src: 'https://wallpaperaccess.com/full/9135.jpg',
                price: 31.00,
                rate: 4.5
            }, 
            {
                _id: "5b21ca3eeb7f6fbccd471815",
                title:'Lords of The Fallen',
                src: 'https://wallpaperaccess.com/full/168336.jpg',
                price: 15.70,
                rate: 3.5
            }, 
            {
                _id: "5b21ca3eeb7f6fbccd471816",
                title:'Titan Fall 2',
                src: 'https://wallpaperaccess.com/full/1282014.jpg',
                price: 18.58,
                rate: 4
            }, 
        ]
    }


    render() { 
        return <GamesContext.Provider value={this.state.games}>{this.props.children}</GamesContext.Provider>
    }
}
 
