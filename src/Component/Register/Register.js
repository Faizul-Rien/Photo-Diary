import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const nevigate = useNavigate();

  const nevigateLogin = (event) => {
    nevigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-5">Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <p>
          Already registered ?{" "}
          <Link
            to={"/login"}
            className="text-success pe-auto text-decoration-none"
            onClick={nevigateLogin}
          >
            Please Login Here
          </Link>
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
