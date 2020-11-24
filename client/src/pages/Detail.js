import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import AddRecipeBtn from "../components/AddRecipeBtn";
import RecipeImg from "../components/RecipeImg";
import API from "../utils/API";


function Detail(props) {
  const [night, setNight] = useState({});

  // When this component mounts, grab the night with the _id of props.match.params.id
  // e.g. localhost:3000/nightin/599dcb67f0f16317844583fc
  const { id } = useParams();
  useEffect(() => {
    API.getNight(id)
      .then((res) => setNight(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>DETAIL OF SPECIFIC RECORD IN COLLECTION</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <p>
              (Link currently redirects to root. Update to send to wine suggestions page. 
              onClick callback currently empty. Update to trigger a submit/add recipe to DB.) 
            <p>
              <Link to="/"><AddRecipeBtn onClick={()=>{}}></AddRecipeBtn></Link>
            </p>
            </p>
            <h1>ID</h1>
            <p>{night._id}</p>
            <h1>TITLE</h1>
            <p>{night.name}</p>
            <h1>INGREDIENTS</h1>
            <p>(need means of providing key for indexes of ingredients array)</p>
            <h1>IMAGE</h1>
            <p>(currently does not work because "src=" is duplicated in props and listed in image's property value string)</p>
            <RecipeImg src={night.image}></RecipeImg>
            <h1>INSTRUCTIONS</h1>
            <p>(need means of providing key for indexes of instructions array)</p>
            <h1>MAIN TYPE</h1>
            <p>{night.type}</p>
            <h1>SUGGESTED WINE PAIRING</h1>
            <p>{night.wine} - {night.subwine}</p>

            
            
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
