import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Row, Col, Alert, Table } from "react-bootstrap";
import { ref, push, onValue } from "firebase/database";
import { database } from "../firebase"; // ✅ Import your firebase connection

const OrderNow = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dish: "",
    quantity: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [orders, setOrders] = useState([]); // ✅ Store all orders

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Submit order to Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const ordersRef = ref(database, "orders");
      await push(ordersRef, formData);
      setSubmitted(true);
      setError("");
      setFormData({ name: "", phone: "", dish: "", quantity: "", address: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      setError("❌ Failed to submit order. Please try again.");
      console.error(err);
    }
  };

  // ✅ Read data from Firebase (Realtime)
  useEffect(() => {
    const ordersRef = ref(database, "orders");
    onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }));
        setOrders(ordersList);
      } else {
        setOrders([]);
      }
    });
  }, []);

  return (
    <Container className="mt-5 mb-5 text-center">
      <Card className="p-4 shadow-lg order-card">
        <h2 className="mb-4">🛒 Order Now</h2>
        <p>Fill in your details below to place your food order!</p>

        <img
          src="https://wallpapercave.com/wp/wp3598832.jpg"
          alt="Order Food"
          className="img-fluid rounded shadow mb-4"
          style={{ maxWidth: "600px", borderRadius: "15px" }}
        />

        {submitted && (
          <Alert variant="success" className="text-center">
            ✅ Thank you! Your order has been placed successfully.
          </Alert>
        )}

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="phone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Form.Group controlId="dish" className="mb-3">
                <Form.Label>Dish Name</Form.Label>
                <Form.Control
                  type="text"
                  name="dish"
                  placeholder="Enter dish name"
                  value={formData.dish}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="quantity" className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="address" className="mb-3">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              placeholder="Enter your delivery address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" variant="success" size="lg" className="mt-3">
            Place Order
          </Button>
        </Form>
      </Card>

    
    </Container>
  );
};

export default OrderNow;
