import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const rooms = [
  { name: "Deluxe Room", price: "₹2000/night", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { name: "Luxury Suite", price: "₹3500/night", image: "https://www.bahrainairporthotel.com.bh/wp-content/uploads/1.jpg" },
  { name: "Family Room", price: "₹2500/night", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
  { name: "Standard Room", price: "₹3000/night", image: "https://tse2.mm.bing.net/th/id/OIP.Rt9EEJuMOrjqF_MfNmzCiQHaEP?w=3000&h=1719&rs=1&pid=ImgDetMain&o=7&rm=3" },
  { name: "Executive Room", price: "₹4000/night", image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/125/2017/05/25023551/Rooms-Suites-Section-3rd-Room-Executive-Room.jpg" },
  { name: "Presidential Suite Room", price: "₹5000/night", image: "https://tse1.mm.bing.net/th/id/OIP.FA--hi57p7xVhzbuctZOKAHaEb?rs=1&pid=ImgDetMain&o=7&rm=3" },
];

const Room = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Room Booking 🏨</h2>
      <Row>
        {rooms.map((room, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-lg h-100">
              <Card.Img variant="top" src={room.image} />
              <Card.Body>
                <Card.Title>{room.name}</Card.Title>
                <Card.Text>Price: {room.price}</Card.Text>
                <Button variant="success">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Room;
