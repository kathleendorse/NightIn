import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import AddRecipeBtn from "../components/AddRecipeBtn";
import RecipeImg from "../components/RecipeImg";
import API from "../utils/API";

//when this component is instantiated it will be passed a "prop" 
function Detail(props) {

  //we use the useState hook to create: 
  //a state object for this component called "night" that is an empty object by default
  //a method for managing/updating this state called "setNight"
  const [night, setNight] = useState({});

  // When this component mounts, it invoke API's getNight method that takes in an id and returns its details
  // if the id changes, run this function again
  const { id } = useParams();
  useEffect(() => {
    API.getNight(id)
      .then((res) => setNight(res.data))
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* Jumbotron accepts props.children thats why we can include an <h1> */}
          <Jumbotron>
            <h1>DETAIL OF SPECIFIC RECORD IN COLLECTION</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        {/* Col accepts props for it's attributes that's how we set the size */}
        <Col size="md-10 md-offset-1">

          {/* All of this is just a placeholder for now until we: 
            1. decide how the page should be styled 
            2. create and bring in components to replace the html elements */}

          <article>
            <p>
              (Link currently redirects to root. Update to send to wine suggestions page. 
              onClick callback currently empty. Update to trigger a submit/add recipe to DB.) 
            <p>
              {/* Link belongs to react-router dom. We want this to go to the suggested wine pairings page*/}
              <Link to="/">
                {/* AddRecipeBtn accepts props. We want the onClick callback tosave the users recipe selection*/}
                <AddRecipeBtn onClick={()=>{}}></AddRecipeBtn>
              </Link>
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
