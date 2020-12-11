import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Cord from "../components/Cord";
// import { useUserContext } from "../utils/UserContext";

function Wine() {
  // const [state, dispatch] = useUserContext();
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
                      <Cord
                      name= {wine.name}
                      image= {wine.image}
                      />
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
