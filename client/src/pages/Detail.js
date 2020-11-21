import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [kate, setKate] = useState({})

  // When this component mounts, grab the kate with the _id of props.match.params.id
  // e.g. localhost:3000/kates/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getKate(id)
      .then(res => setKate(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                DETAIL OF SPECIFIC RECORD IN COLLECTION
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>ID</h1>
              <p>{kate._id}</p>
              <h1>TITLE</h1>
              <p>{kate.title}</p>
              <h1>DATE</h1>
              <p>{kate.date}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Main Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
