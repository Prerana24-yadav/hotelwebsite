import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const specialItems = [
  { name: "Grilled Salmon", price: "₹450", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2" },
  { name: "Lamb Chops", price: "₹550", image: "https://images.unsplash.com/photo-1543353071-873f17a7a088" },
  { name: "Tandoori Chicken", price: "₹400", image: "https://flavoriva.com/wp-content/uploads/2024/04/Tandoori-Chicken.jpg" },
   { name: "Choco Lava Cake", price: "₹300", image: "https://tse4.mm.bing.net/th/id/OIP.aHNWUGMHAox_4wbiILwFxQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3s" },
    { name: "Nachos with Cheese", price: "₹500", image: "https://www.errenskitchen.com/wp-content/uploads/2022/04/nachos-1-6.jpg" },
     { name: "Crispy Paneer Burger", price: "₹560", image: "https://i.pinimg.com/736x/80/d7/df/80d7df8e1902790d4913121a2599bb25.jpg" },
  
];

const SpecialMenu = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Chef’s Special Menu 🍷</h2>
      <Row>
        {specialItems.map((item, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SpecialMenu;
