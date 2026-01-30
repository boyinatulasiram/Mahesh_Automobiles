import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Unbrako = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Unbrako Fastener</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete fastener solution.</h3>
                    <p className="lead">
                        High-strength Unbrako fasteners for heavy-duty applications. We provide a complete range of bolts,
                        screws, and nuts known for their superior quality and performance.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Unbrako;
