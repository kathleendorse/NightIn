import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Card } from "react-bootstrap";
import { useUserContext } from "../utils/UserContext";
import Nav from "../components/Nav";

function Wine() {
  const [state, dispatch] = useUserContext();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    loadWines();
  }, []);

  function loadWines() {
    API.getWines()
      .then((res) => setWines(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h5>FindAll Wine Collection</h5>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">
            {wines.length ? (
              <List>
                {wines.map((wine) => (
                  <ListItem key={wine._id}>
                    <Link to={"/wine/" + wine._id}>
                      <Card style={{ width: "10rem" }} className="text-center">
                        <Card.Img
                          className="rounded-circle"
                          variant="top"
                          src={wine.image}
                          alt={`photo of ${wine.title}`}
                        />
                        <Card.Title>{wine.name}</Card.Title>
                      </Card>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Wine;
