import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { useUserContext } from "../utils/UserContext";

function Home() {
  const [state, dispatch] = useUserContext();

  return (
    <Container fluid>
      <Row>
        <Col size="md-10 sm-12">
          <Jumbotron>
            <h1>{state.user.email}</h1>
            <h1>Start Planning Your Night In</h1>
            <br></br>
            <button>
              <Link to={"/recipe"}>Start Planning Your Night In</Link>
            </button>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
