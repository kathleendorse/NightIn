import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //test
  const [state, dispatch] = useUserContext();
  //----
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  const register = () => {
    API.userRegister({
      email: email,
      password: password,
    })
      .then((res) => {
        if (res.data.email === email) {
          dispatch({
            type: "setCurrentUser",
            user: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  //--------
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Link to={`/${state.user.id}/home`}>
          <Button
            block
            size="lg"
            type="submit"
            onClick={register}
            disabled={!validateForm()}
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <strong>Or Click here to Login</strong>
        </Link>
      </Form>
    </div>
  );
}
