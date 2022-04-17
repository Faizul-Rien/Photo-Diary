import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef("");

  const passwordRef = useRef("");

  const nevigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);
  };

  const nevigateRegister = (event) => {
    nevigate("/register");
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-5">Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          Create new account ?{" "}
          <Link
            to={"/register"}
            className="text-danger pe-auto text-decoration-none"
            onClick={nevigateRegister}
          >
            Please Register Here
          </Link>
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
