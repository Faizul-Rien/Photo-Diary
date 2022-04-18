import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const nevigate = useNavigate();

  const nevigateLogin = (event) => {
    nevigate("/login");
  };

  if (user) {
    nevigate("/home");
  }
  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(event.target.email.value);
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-center mt-5">Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
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
        <Button variant="primary" type="submit" value="Register">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
