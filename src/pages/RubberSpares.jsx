import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RubberSpares = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Rubber Spares</h1>
            <Row>
                <Col md={12}>
                    <h3>RUBBER SHEETS AND PARTS</h3>
                    <p className="lead">
                        High-grade rubber sheets and spare parts for sealing, insulation, and wear protection.
                        Customized rubber components to meet specific industrial requirements.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default RubberSpares;
