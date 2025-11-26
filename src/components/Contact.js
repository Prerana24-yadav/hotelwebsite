import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="mt-5 text-center">
      <h2 className="mb-4">📞 Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm contact-card">
            <Card.Body>
              <h4 className="mb-3">My Restaurant</h4>
              <p className="text-muted">
                We’d love to hear from you! Feel free to reach out for any
                reservations, event bookings, or general inquiries.
              </p>

              <hr />

              <p>
                <strong>📍 Address:</strong> 123 Foodie Street, Gourmet City,
                India
              </p>
              <p>
                <strong>📞 Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>📧 Email:</strong> contact@myrestaurant.com
              </p>
              <p>
                <strong>🕒 Working Hours:</strong> Mon - Sun: 10:00 AM - 11:00 PM
              </p>

              <div className="mt-4">
                <iframe
                  title="restaurant-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387143.0125481706!2d-74.25819368787559!3d40.70583163840607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a8a4a9a9a9a9a9a!2sRestaurant!5e0!3m2!1sen!2sin!4v1698967425701!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
