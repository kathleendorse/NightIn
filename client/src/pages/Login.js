import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";
import { Redirect } from "react-router-dom";
import { Container } from "../components/Grid";

export default function Login({ useremail }) {

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
    console.log(state._email);
  }

  //sets local storage
  const setLocal = (data) => {

    if (data.favs.length && data.shoppingList.length){
        localStorage.setItem("_id", JSON.stringify(data._id));
        localStorage.setItem("email", JSON.stringify(data.email));
        localStorage.setItem("favs", JSON.stringify(data.favs));  
        localStorage.setItem("shoppingList", JSON.stringify(data.shoppingList));      
    }
    else if(data.favs.length && !data.shoppingList.length){
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("favs", JSON.stringify(data.favs));  
      localStorage.setItem("shoppingList", JSON.stringify([]));
    }
    else if(!data.favs.length && data.shoppingList.length){
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("favs", JSON.stringify([]));  
      localStorage.setItem("shoppingList", JSON.stringify(data.shoppingList));
    }
    else{
      localStorage.setItem("_id", JSON.stringify(data._id));
      localStorage.setItem("email", JSON.stringify(data.email));
      localStorage.setItem("favs", JSON.stringify([]));  
      localStorage.setItem("shoppingList", JSON.stringify([]));
    }

  };

  //sets state
  const setState = () => {

    let _id= JSON.parse(localStorage.getItem("_id"));
    let email= JSON.parse(localStorage.getItem("email"));
    let favs= JSON.parse(localStorage.getItem("favs"));
    let shoppingList= JSON.parse(localStorage.getItem("shoppingList"));

    dispatch({
      type: "setCurrentUser",   
      _id: _id,
      email: email,
      favs: favs,
      shoppingList: shoppingList,
    });

  }  

  //logs user in, invokes setStorage and setState
  const login = () => {
    API.userLogin({
      email: email,
      password: password,
    }).then(
      (res) => {
        if (res.status === 200) {
          if (res.data.email === email) {
            setLocal(res.data);
            setState();
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
      <Container className="Login">
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
      </Container>
    </div>
  );
}
