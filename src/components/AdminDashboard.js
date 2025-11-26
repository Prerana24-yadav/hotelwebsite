// src/components/AdminDashboard.js
import React, { useEffect, useState } from "react";
import { Container, Table, Card, Button, Alert } from "react-bootstrap";
import { ref, onValue, remove } from "firebase/database";
import { database } from "../firebase";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  // ✅ Redirect to website home page if not logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (!loggedIn) navigate("/"); // redirects to website instead of admin-login
  }, [navigate]);

  // ✅ Fetch orders from Firebase Realtime Database
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

  // ✅ Logout button → go to website homepage
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/"); // 👈 Redirect to website instead of admin-login
  };

  // ✅ Delete order from Firebase
  const handleDelete = async (orderId) => {
    const confirmDelete = window.confirm("Delete this order?");
    if (confirmDelete) {
      await remove(ref(database, `orders/${orderId}`));
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow-lg">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>📋 Admin Dashboard</h2>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {orders.length === 0 ? (
          <Alert variant="info">No orders found</Alert>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Dish</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.phone}</td>
                  <td>{order.dish}</td>
                  <td>{order.quantity}</td>
                  <td>{order.address}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(order.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>
    </Container>
  );
};

export default AdminDashboard;
