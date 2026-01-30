import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import universalImg from '../assets/products/universal.png';

const UniversalElectrode = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Universal Electrode Industry</h1>
            <Row>
                <Col md={6}>
                    <img src={universalImg} alt="Universal Electrode Industry" className="img-fluid rounded shadow-sm mb-4" />
                </Col>
                <Col md={6}>
                    <h3>Complete Welding solution.</h3>
                    <p className="lead">
                        Your one-stop destination for all welding needs. We provide electrodes and welding equipment of the highest standards.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default UniversalElectrode;
