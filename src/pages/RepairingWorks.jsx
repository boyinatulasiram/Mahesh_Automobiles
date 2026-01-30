import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RepairingWorks = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Repairing Works</h1>
            <Row>
                <Col md={12}>
                    <h3>Complete dewatering pump repair, electric motor repair, and rewinding work</h3>
                    <p className="lead">
                        Expert repair services for dewatering pumps and electric motors. Our skilled technicians ensure
                        reliable rewinding and maintenance services to minimize downtime.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default RepairingWorks;
