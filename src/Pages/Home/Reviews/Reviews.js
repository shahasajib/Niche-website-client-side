import React, { useEffect, useState } from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import './Reviews.css'

const Reviews = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://agile-everglades-13182.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <Container>
                <h2 className="headerToys reviewsText"><b>Our Client Comment</b></h2>
                <Row>
                    {
                        review.map(review => (
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{review.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{review.rating}</Card.Subtitle>
                                    <Card.Text>
                                        {review.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;