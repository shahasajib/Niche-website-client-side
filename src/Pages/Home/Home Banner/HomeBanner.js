import React from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeBanner.css'
import homebanner1 from '../../../Images/Home Banner/homeBanner.jpg'
import homebanner2 from '../../../Images/Home Banner/homeBanner2.jpg'
import homebanner3 from '../../../Images/Home Banner/homeBanner3.jpg'

const HomeBanner = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homebanner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="centered1 ">
                        <h1>Best Babies Soft Toys</h1>
                        <p>Our thought is that the children are happy.Then we are happy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homebanner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className="centered2">
                        <h1>Great Fullfy Toys</h1>
                        <p>This doll is very Soft.It is very enjoyable thing for our children.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homebanner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className="centered3" >
                        <h1>Baby in Wonderland</h1>
                        <p>We have collected all kinds of doll.So, kitty katty is the baby wonderland</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;