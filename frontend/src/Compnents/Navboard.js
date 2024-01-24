import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartItems } from "../Slices/CartSlice";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Navboard = (props) => {
  const navigate = useNavigate();
  const cartProducts = useSelector(cartItems);
  const userName = sessionStorage.getItem("name");

  const logout = () => {
    sessionStorage.clear();
    alert("log out");
    navigate("/SignIn");
  };

  return (
    <>
      {/* <Navbar style={{ backgroundColor: "#f5f6fc" }} fixed="top"> */}
      <Navbar bg="light" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand to="/Home" as={Link}>
            EcommerceCart
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/Home" as={Link}>
              Home
            </Nav.Link>
            <Nav.Link to="/Products" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Form className=" me-auto justify-content-center d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={{ width: "400px" }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="justify-content-end">
            <Image
              src="https://www.vhv.rs/dpng/d/15-155087_dummy-image-of-user-hd-png-download.png"
              alt="logo"
              roundedCircle
              style={{ width: "40px", height: "40px" }}
            />

            <NavDropdown title={userName} id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout} eventKey="4.4">
                Log out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to="/Cart" as={Link}>
              Cart {cartProducts.length}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navboard;
