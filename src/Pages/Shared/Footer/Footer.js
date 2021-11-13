import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <Container  >
                <Row className="m-2">
                    <Col xs={12} md={4}>
                        <ul><h5 >Legal</h5></ul>
                        <ul>
                            Terms of services
                        </ul>
                        <ul>
                            Privacy Policy
                        </ul>
                        <ul>
                            Cookies
                        </ul>
                        <ul>
                            Terms of Use
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <ul><h5 >Opening hours</h5></ul>
                        <ul>
                            <small>Monday-Friday ----- 09.00 - 8.00</small>
                        </ul>
                        <ul>
                            <small>Saturday -------------10.00 - 7.00</small>
                        </ul>
                        <ul>
                            <small>Sunday ---------- Closed</small>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <ul><h5 >Services</h5></ul>
                        <ul>
                            <small>History</small>
                        </ul>
                        <ul>
                            <small>Careers</small>
                        </ul>
                        <ul>
                            <small>24/7 Support</small>
                        </ul>
                        <ul>
                            <small>Delivery Info</small>
                        </ul>
                    </Col>

                </Row>
            </Container>

            <div className="FooterText">
                <div>------------------------</div>
                <p >© 2021 kitty Katty</p>
            </div>
        </div>
    );
};

export default Footer;