import { Card, Col } from 'react-bootstrap';

export default function ProductCard({ product }) {
  return (
    <Col>
      <Card className="h-100 shadow-sm">
        <div className="bg-white p-3 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6">{product.title}</Card.Title>
          <Card.Text className="text-muted text-capitalize mb-2">
            {product.category}
          </Card.Text>
          <Card.Text className="fw-bold mt-auto mb-0">
            ${product.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
