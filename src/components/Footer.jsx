import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-custom pt-5 pb-3">
            <Container>
                <Row className="gy-4">
                    <Col md={4} className="text-center text-md-start">
                        <h3 className="text-accent mb-3">Mahesh Automobiles</h3>
                        <p className="small">
                            Providing top-tier automobile and mining solutions with professionalism and integrity.
                        </p>
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                        <h5 className="mb-3 text-white">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-white-50 hover-white">Home</a></li>
                            <li><a href="/about" className="text-white-50 hover-white">About Us</a></li>
                            <li><a href="/products" className="text-white-50 hover-white">Products</a></li>
                            <li><a href="/contact" className="text-white-50 hover-white">Contact</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="text-center text-md-start">
                        <h5 className="mb-3 text-white">Contact Info</h5>
                        <p className="mb-2"><FaMapMarkerAlt className="me-2 text-accent" /> Mahesh Automobiles, Banwari Chouraha, Gulabpura, Bhilwara - 311021, Rajasthan, India</p>
                        <p className="mb-1"><FaPhone className="me-2 text-accent" /> +91 90014 60794 (KL Somani - CEO)</p>
                        <p className="mb-1"><FaPhone className="me-2 text-accent" /> +91 90792 58920 (Shivam Somani - Manager)</p>
                        <p className="mb-1"><FaEnvelope className="me-2 text-accent" /> maheshautogpa@gmail.com</p>
                        <div className="mt-3">
                            <a href="https://wa.me/919079258920" target="_blank" rel="noreferrer" className="text-white fs-4 hover-accent">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </Col>
                </Row>
                <hr className="border-secondary my-4" />
                <div className="text-center small text-white-50">
                    © {new Date().getFullYear()} Mahesh Automobiles. All Rights Reserved.
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
