import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="success"
      sticky="top"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Photo Diary
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            {user ? (
              <button
                className="bg-danger rounded text-white border-0"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
