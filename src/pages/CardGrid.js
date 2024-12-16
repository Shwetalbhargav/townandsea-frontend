import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Lamp from '../Assets/Royal.jpg';
import Pottery from '../Assets/Chairs.jpg';
import Dinner from '../Assets/Cabinet.jpg';
import OfferForm from "../components/OfferForm";
// Sample data for the cards
const products = [
  {
    id: 1,
    image: Lamp,
    title: "Large Collection of Royal Copenhagen Blue Flower Braided, 98 Pieces",
    price: "$2,500",
    status: "",
  },
  {
    id: 2,
    image: Pottery,
    title: "Theodore Alexander Cane Chairs with Schumacher Seats, Set of 6",
    price: "$800",
    status: "Sold",
  },
  {
    id: 3,
    image: Dinner,
    title: "Antique Spanish Colonial Geometric Front Walnut Cabinet with Inlay",
    price: "$2,400",
    status: "",
  },
];

const CardGrid = () => {
  return (
    <Container className="py-5">
      <Row className="g-4">
        {products.map((product) => (
          <Col lg={4} md={6} key={product.id}>
            <Card className="h-100 text-center shadow-sm">
              {/* Card Image */}
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                className="p-3"
              />

              {/* Card Body */}
              <Card.Body>
                <Card.Title className="fw-bold fs-5">{product.title}</Card.Title>
                <Card.Text className="text-success fs-5 fw-bold">
                  {product.price}
                </Card.Text>
                {product.status && (
                  <Card.Text className="text-success fw-semibold">
                    {product.status}
                  </Card.Text>
                )}
              </Card.Body>

              {/* Buttons */}
              <Card.Footer className="bg-white">
                <Button variant="primary" className="w-100 mb-2">
                  ADD TO CART
                </Button>
                <Button variant="info" className="w-100 text-white">
                <OfferForm/>
                </Button>
                
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
