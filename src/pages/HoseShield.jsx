import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import spiralGuard1 from '../assets/products/hose_shield/spiral_guard_1.png';
import sleeve2 from '../assets/products/hose_shield/sleeve_2.png';
import spiralGuard3 from '../assets/products/hose_shield/spiral_guard_3.png';
import strapBelt4 from '../assets/products/hose_shield/strap_belt_4.png';
import spiralGuard5 from '../assets/products/hose_shield/spiral_guard_5.png';
import sleeve6 from '../assets/products/hose_shield/sleeve_6.png';
import sleeve7 from '../assets/products/hose_shield/sleeve_7.png';
import sleeve8 from '../assets/products/hose_shield/sleeve_8.png';
import sleeve9 from '../assets/products/hose_shield/sleeve_9.png';
import wrap10 from '../assets/products/hose_shield/wrap_10.png';
import sleeve11 from '../assets/products/hose_shield/sleeve_11.png';
import sleeve12 from '../assets/products/hose_shield/sleeve_12.png';
import bundler13 from '../assets/products/hose_shield/bundler_13.png';

const HoseShield = () => {
    const products = [
        { title: "HOSE-SHIELD-Spiral Guard", description: "Complete range of Hose Protection Coil", img: spiralGuard1 },
        { title: "HOSE-SHIELD-Sleeve", description: "Complete range of Safe Sleeve", img: sleeve2 },
        { title: "HOSE-SHIELD-Strap Belt", description: "complete range of hose binding accessories.", img: strapBelt4 },
        { title: "HOSE-SHIELD-Fire Sleeve", description: "complete range of Fire Sleeve", img: sleeve7 },
        { title: "HOSE-SHIELD-Sleeve MSHA", description: "complete range of MSHA Sleeve", img: sleeve8 },
        { title: "HOSE-SHIELD-Wrap", description: "complete range 0f Velcro Sleeve", img: wrap10 },
        { title: "HOSE-SHIELD-Bundler", description: "Tool For Spiral Guard Mounting", img: bundler13 },
    ];

    return (
        <Container className="py-5">
            <h2 className="text-center mb-5" style={{ color: '#333', fontWeight: 'bold' }}>HOSE SHIELD PRODUCTS</h2>
            <Row>
                {products.map((product, index) => (
                    <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                        <Card className="h-100 shadow-sm border-0 product-card">
                            <div className="overflow-hidden bg-white d-flex align-items-center justify-content-center p-3" style={{ height: '300px' }}>
                                <Card.Img
                                    variant="top"
                                    src={product.img}
                                    alt={product.title}
                                    style={{ maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                                />
                            </div>
                            <Card.Body className="text-center bg-light">
                                <Card.Title style={{ fontSize: '1.1rem', fontWeight: '600' }}>{product.title}</Card.Title>
                                <Card.Text style={{ fontSize: '0.8rem', fontWeight: '400' }}>{product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default HoseShield;
