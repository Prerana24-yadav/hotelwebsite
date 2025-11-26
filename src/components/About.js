import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5 text-center">
      <h2>About Us</h2>
      <p>
        Welcome to MyRestaurant! We are passionate about serving delicious,
        freshly made food with the finest ingredients. Our mission is to
        provide a warm dining experience with exceptional service.
      </p>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/ceae91173775187.6495aca17f107.png"
        alt="About us"
        className="img-fluid rounded shadow mt-3"
      />
    </Container>
  );
};

export default About;
