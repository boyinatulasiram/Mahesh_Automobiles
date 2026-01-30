import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HdpePipe = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">HDPE Pipe and Fittings</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete pipes and fittings solution.</h3>
                    <p className="lead">
                        Durable HDPE pipes and fittings for water management, slurry transport, and ventilation.
                        Corrosion-resistant and long-lasting solutions for mining infrastructure.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default HdpePipe;
