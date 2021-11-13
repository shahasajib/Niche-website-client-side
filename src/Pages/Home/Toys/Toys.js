import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import toys from '../../../Images/Toys/home-01.png'
import toys2 from '../../../Images/Toys/home-02.png'
import toys3 from '../../../Images/Toys/home-03.png'
import './Toys.css'

const Toys = () => {
    return (
        <div className="m-4">
            <div className="toys">
                <h4><i>Welcome To</i></h4>
                <h3 className="headerToys"><b >Kitty Katty Doll House</b></h3>
            </div>
            <Container >
                <Row>
                    <Col xs={12} md={4}>
                        <Image src={toys} fluid />
                        <h4>Exclusive Collections</h4>
                        <p>We have to try new collection of our baby.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src={toys2} fluid />
                        <h4>Happiness Guaranteed</h4>
                        <p>We have to try of our children happiness.</p>
                    </Col>
                    <Col xs={12} md={4}>
                        <Image src={toys3} fluid />
                        <h4>Trending Toys</h4>
                        <p>We have to try of collection trending toys .</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Toys;