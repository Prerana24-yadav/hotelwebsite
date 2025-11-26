// src/components/AdminLogin.js
import React, { useState } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // ✅ Hardcoded admin credentials (change these as needed)
  const ADMIN_EMAIL = "pre123a@gmail.com";
  const ADMIN_PASSWORD = "pre@12";

  const handleChange = (e) => {
    setError(""); // Clear error while typing
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Save login state and redirect
      localStorage.setItem("adminLoggedIn", "true");
      navigate("/admin-dashboard");
    } else {
      setError("❌ Invalid email or password. Please try again.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "400px" }} className="p-4 shadow-lg">
        <h3 className="text-center mb-4">👨‍💼 Admin Login</h3>

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter admin email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            type="submit"
            variant="primary"
            className="w-100 mt-2"
          >
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default AdminLogin;
