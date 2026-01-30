import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const WeldingAccessories = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Welding Accessories</h1>
            <Row>
                <Col md={12}>
                    <h3>Ador, Esab, D&H, Boiler, L&T etc.</h3>
                    <p className="lead">
                        High-quality welding accessories and consumables from top brands. We ensure you have the right tools
                        for precise and durable welding works.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default WeldingAccessories;
