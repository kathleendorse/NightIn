import React from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { useUserContext } from "../utils/UserContext";

function Home() {
  const [state, dispatch] = useUserContext();

  return (
    <Container fluid className="justify-content-center">
      <Row className="justify-content-center">
        <Col size="md-12 sm-12">
          {state.email ? (
            <Jumbotron>
              <p className="lead">
                Welcome <span className="text-muted">{state.email}</span>!
              </p>
              <br></br>
              <button type="button" className="btn btn-secondary btn-lg">
                <Link to={"/recipe"}>Start Planning Your Night In</Link>
              </button>
            </Jumbotron>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
