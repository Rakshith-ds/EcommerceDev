import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import api from "../api/link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GridComplexExample() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  console.log(user);

  const sendRequest = async (user) => {
    const request = await api.post("/signup", user);
    setUser(request.data);
    alert(request.data);
    if (request.data === "Thank u for signing up") {
      navigate("/SignIn");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    if (newUser.password !== newUser.repassword) {
      alert("Passwords Dont Match");
      navigate("/SignUp");
    } else {
      sendRequest(newUser);
    }
  };

  return (
    <Form
      style={{ width: "500px", marginLeft: "500px", marginTop: "100px" }}
      onSubmit={handleChange}
    >
      <h1>Register</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter FirstName"
            id="firstName"
            name="firstName"
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter LastName"
            id="lastName"
            name="lastName"
            autoComplete="off"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Email</Form.Label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
          id="email"
          name="email"
          autoComplete="off"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Password</Form.Label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
          id="password"
          name="password"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>ReEnter Password</Form.Label>
        <input
          className="form-control"
          type="password"
          placeholder="ReEnter Password"
          id="repassword"
          name="repassword"
        />
      </Form.Group>

      <a href="/SignIn" style={{ float: "right", paddingTop: "10px" }}>
        Already Have an Account, SignIn
      </a>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default GridComplexExample;
