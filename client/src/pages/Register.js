import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useUserContext();

  useEffect(()=>{
    //checks local storage to update state if state is empty
    let storageStatusId = JSON.parse(localStorage.getItem("_id"));
    let storageStatusEmail = JSON.parse(localStorage.getItem("email"));
    let storageStatusFavs = JSON.parse(localStorage.getItem("favs"));
    let storageStatusShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
    if (state._id === "" && storageStatusId){
      dispatch({
        type: "setCurrentUser",
        email: storageStatusEmail,
        _id: storageStatusId,
        favs: storageStatusFavs,
        shoppingList: storageStatusShoppingList,
      });
    } else {
      return;
    }

  },[state._id, dispatch]);


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
        if (res.data === "User Already Exists") {
          alert("This email is already in use");
        } else {
          window.location = "/login";
        }
      })
      .catch((err) => console.log(err));
  };

  //--------
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="md" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="md" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          block
          size="md"
          type="submit"
          onClick={register}
          disabled={!validateForm()}
        >
          Sign Up
        </Button>

        <Link to="/login">
          <strong>Or Click here to Login</strong>
        </Link>
      </Form>
    </div>
  );
}
