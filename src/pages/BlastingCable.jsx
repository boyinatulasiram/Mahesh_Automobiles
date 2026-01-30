import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlastingCable = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Blasting Cable</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete underground blasting solution</h3>
                    <p className="lead">
                        Safety-compliant blasting cables for underground mining operations. Designed for reliability and
                        secure signal transmission in critical blasting applications.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default BlastingCable;
