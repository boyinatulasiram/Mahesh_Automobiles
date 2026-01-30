import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import deutzImg from '../assets/products/deutz.png';

const Deutz = () => {
    return (
        <Container className="section-padding">
            <h1 className="fw-bold mb-4">DEUTZ SPARE PARTS</h1>
            <Row>
                <Col md={6}>
                    <img src={deutzImg} alt="DEUTZ SPARE PARTS" className="img-fluid rounded shadow-sm mb-4" />
                </Col>
                <Col md={6}>
                    <h3>ALL TYPE OF DEUTZS SPARE PARTS</h3>
                    <p className="lead">
                        Authentic and reliable spare parts for Deutz engines. Keep your machinery running smoothly with our range of components.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Deutz;
