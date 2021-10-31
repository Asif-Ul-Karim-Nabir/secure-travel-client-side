import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark pt-5 footer-container">
            <Row xs={3} md={3} className="g-4 w-75 mx-auto">
                <Col>
                <h3 className="text-white">Secure Travel</h3>
                <Link to="/login">Register here?</Link>
                </Col>
                <Col>
                <Link to="/home">Home</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/login">login</Link>
                </Col>           
                <Col>
                <p>About Us</p>
                <p>Phone</p>
                <p>+006576878</p>
                </Col>           
            </Row>
        </div>
    );
};

export default Footer;