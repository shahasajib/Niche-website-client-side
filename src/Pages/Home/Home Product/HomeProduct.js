import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './HomeProducts.css'

const HomeProduct = () => {
    const [homeToy, setHomeToy] = useState([]);
    useEffect(() => {
        fetch('https://agile-everglades-13182.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setHomeToy(data.slice(2, 8)))
    }, [])
    return (
        <>
            <div>
                <div className="homeProducts">
                    <h4><i>Shop To</i></h4>
                    <h2 className="headerToys "><b>Our Shop</b></h2>
                </div>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {homeToy.map(toy => (
                            <Col>
                                <Card >
                                    <Card.Img variant="top" src={toy.img} />
                                    <Card.Body>
                                        <Card.Title>{toy.name}</Card.Title>
                                        <Card.Text>
                                            {toy.description}
                                        </Card.Text>
                                        <Card.Text>
                                            ${toy.price}
                                        </Card.Text>
                                        <button className="btn ">Shop Now</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

            </div>
        </>
    );
};

export default HomeProduct;