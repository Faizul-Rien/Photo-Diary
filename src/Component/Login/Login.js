import React, { useRef} from "react";
import { Button, Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
      auth
    );
  const emailRef = useRef("");

  const passwordRef = useRef("");

  const nevigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    nevigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
    sendPasswordResetEmail(email)
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
        <Button className="text-decoration-none" variant="link">Forget password?</Button><br />
        <Button variant="primary" type="submit">Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
