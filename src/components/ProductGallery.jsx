import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProductGallery.css';

const ProductGallery = ({ title, products }) => {
    return (
        <Container className="py-5">
            {title && (
                <h2 className="text-center mb-5 section-title gallery-fade-in">
                    {title}
                </h2>
            )}
            <Row>
                {products.map((product, index) => (
                    <Col md={4} sm={6} xs={12} key={index} className="mb-4 gallery-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <Card className="h-100 shadow-sm product-gallery-card">
                            <div className="product-gallery-img-container">
                                <Card.Img
                                    variant="top"
                                    src={product.img}
                                    alt={product.title}
                                    className="product-gallery-img"
                                />
                            </div>
                            <Card.Body className="text-center">
                                <Card.Title className="product-gallery-title">{product.title}</Card.Title>
                                {product.description && (
                                    <Card.Text className="text-muted small mt-2">
                                        {product.description}
                                    </Card.Text>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductGallery;
