// Created by Muhammed Ebrahim

import {Card, Row, Col} from 'react-bootstrap'
import Button from '../constant/CommonButton'
import Stars from '../constant/starRating'

const cardStyle = {
    width: '18rem',
    backgroundColor:'transparent',
    color:'white',
    textAlign:'center',
    margin:'0px 8px',
    border:'none',  
    fontFamily: 'Roboto '
}

const imageStyle = {
    height:'180px', 
    transform: 'skew(-10deg)',
    borderRadius: '0px'

}

const ShopGridItem = ({game}) => {
    return ( 
        <Card key={game._id} style={cardStyle}>
        <Card.Img variant="top" src={game.src} style={imageStyle}/>
        <Card.Body>
          <Card.Title>{game.title}</Card.Title>
          <Row>
              <Col>
                <Stars defaultValue={game.rate}/>
              </Col>
              <Col>
                <p style={{fontSize:'20px'}}>{`$${game.price.toFixed(2)}`}</p>
              </Col>
          </Row>
          <Button  text={'Add to cart'}/>
        </Card.Body>
      </Card>
     );
}
 
export default ShopGridItem;