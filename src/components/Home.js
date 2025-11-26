import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="text-center mt-5">
      {/* Restaurant Image */}
      <img
        src="https://wallpaperaccess.com/full/2690586.jpg"
        alt="Restaurant Interior"
        className="img-fluid rounded shadow home-image"
      />

      {/* Welcome Text */}
      <div className="mt-4">
        <h1>Welcome to My Restaurant 🍴</h1>
        <p className="lead">Enjoy delicious meals made with love and care. also With Saouth Indian Food Maharashtra Breakfast food</p>
      </div>
    </Container>
  );
};

export default Home;
