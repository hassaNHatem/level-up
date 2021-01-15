// Created by Muhammed Ebrahim

import Rating from 'react-simple-star-rating'

const starRating = ({defaultValue}) => {
    return(     
    <Rating
        ratingValue={defaultValue}
        size={17}
        label
        transition
        fillColor= 'white'
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      /> 
    );
}
 
export default starRating;