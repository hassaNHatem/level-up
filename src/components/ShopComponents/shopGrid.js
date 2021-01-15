// Created by Muhammed Ebrahim

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import GridItem from './ShopGridItem'

const ContainerDiv = styled.div`
    margin: 0% 5%;
    height:1500px;
    background-color:rgb(29 24 62 / 98%);
    padding: 5% 8%;
`

const shopGrid = ({games}) => {

    const {length: numOfGames} = games

    if(numOfGames === 0) return <Container><p style={{color:'white',fontSize:"25px", fontWeight:"bolder", marginTop:"15px"}}>There is no Games to show.</p></Container>

     return ( 
         <ContainerDiv>
             <Row>
             <Col md={10} sm={12}>
                 <Row>
                     <h3 style={{color:'white',fontSize:'15px'}}>
                         Showing 100 result
                     </h3>
                 </Row>
                 <Row>
                     {
                        games.map(game => (<GridItem game={game}/>))
                     }
                 </Row>
     
             </Col>
             <Col md={2} sm={0}></Col>
             </Row>
         </ContainerDiv>
      );
     
}
 
export default shopGrid;
