import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ToolsHardware = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">Tools and Hardware</h1>
            <Row>
                <Col md={12}>
                    <h3>Taparia, Stanley, Dewalt, Makita, Ingco, Bosch etc</h3>
                    <p className="lead">
                        Authorized dealer and supplier of world-renowned tool brands. We provide a wide range of hand tools,
                        power tools, and hardware accessories for professional use.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default ToolsHardware;
