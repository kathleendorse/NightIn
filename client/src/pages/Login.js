import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import API from "../utils/API";
//added
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import { Redirect } from "react-router-dom";

//----

export default function Login({ useremail }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //console.log("useremail: ", useremail);

  //test
  const [state, dispatch] = useUserContext();
  //----

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  const checkLocal = () => {
    let storageStatus = JSON.parse(localStorage.getItem("currentUser"));
    if (storageStatus) {
      if (storageStatus.email !== null && state.email === "") {
        dispatch({
          type: "setCurrentUser",
          email: storageStatus.email,
          _id: storageStatus._id,
          favs: storageStatus.favs,
          shoppingList: storageStatus.shoppingList,
        });
      }
      console.log(storageStatus.email);
    }
  };

  checkLocal();

  const login = () => {
    API.userLogin({
      email: email,
      password: password,
    }).then(
      (res) => {
        if (res.status === 200) {
          console.log(res);
          if (res.data.email === email) {
            // dispatch({
            //   type: "setCurrentUser",
            //   user: res.data,
            // });
            console.log(res.data);
            dispatch({
              type: "setCurrentUser",
              _id: res.data._id,
              email: res.data.email,
              favs: res.data.favs,
              shoppingList: res.data.shoppingList,
            });
            localStorage.setItem("currentUser", JSON.stringify(res.data));
            console.log(state._id);
            // const use = (res.data.id);
            // (window.location.href = `${use}/home`)
          }
        }
      },
      () => {
        console.log("Login Failed");
      }
    );
  };

  return (
    <div className="Login">
      {useremail && <Redirect to="/home" />}
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
        <Link to="/home">
          <Button
            block
            size="md"
            type="submit"
            disabled={!validateForm()}
            onClick={login}
          >
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
}
