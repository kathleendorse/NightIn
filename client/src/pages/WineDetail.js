import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
import API from "../utils/API";
import { useUserContext } from "../utils/UserContext";
import Nav from "../components/Nav";

function WineDetail(props) {
  const [wine, setWine] = useState({});
  const [vintages, setVintages] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    handleWine(id);
    handleVintages(id);
  }, [id]);

  function handleWine(id) {
    API.getWine(id)
      .then((res) => setWine(res.data))
      .catch((err) => console.log(err));
  }

  function handleVintages(id) {
    API.getWine(id)
      .then((res) => setVintages(res.data.vintages))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <Row>
              <Link to="/wine">
                <Butt
                  onClick={() => {}}
                  type="success"
                  className="input-lg btn-lg"
                >
                  ← Back
                </Butt>
              </Link>
              <Link to="/favorites">
                <Butt
                  onClick={() => {}}
                  type="success"
                  className="input-lg btn-lg"
                >
                  + Select Wine
                </Butt>
              </Link>
            </Row>
            <Row>
              <Col size="md-10">
                <Photo src={wine.image} alt={wine.name}></Photo>
                <br></br>
                <h1>{wine.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col size="md-10">
                <h2>VINTAGES</h2>
                {vintages.length ? (
                  <List>
                    {vintages.map((vintage) => (
                      <ListItem key={vintage.id}>{vintage.vin}</ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WineDetail;
