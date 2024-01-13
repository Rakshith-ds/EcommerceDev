import Form from "react-bootstrap/Form";
import api from "/Users/rakshithds/Desktop/ReactJS/Frontend/src/api/link.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  const sendRequest = async (user) => {
    const request = await api.post("/signin", user);
    setUser(request.data);
    console.log(request.data);
    alert(request.data.message);
    if (request.data.message === "Logged In") {
      const name = request.data.name;
      sessionStorage.setItem("name", name);
      navigate("/Home");
    } else {
      alert(request.data.message);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    sendRequest(newUser);
  };
  return (
    <div>
      <Form
        style={{ width: "500px", marginLeft: "500px", marginTop: "100px" }}
        onSubmit={handleChange}
      >
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            autoFocus
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <a href="/SignUp" style={{ float: "right", paddingTop: "10px" }}>
          Create an account
        </a>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default SignIn;
