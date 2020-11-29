import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import AddRecipeBtn from "../components/AddRecipeBtn";
import RecipeImg from "../components/RecipeImg";
import API from "../utils/API";

//when this component is instantiated it will be passed a "prop" 
function RecipeDetail(props) {

  //we use the useState hook to create: 
  //a state object for this component called "night" that is an empty object by default
  //a method for managing/updating this state called "setNight"
  const [recipe, setRecipe] = useState({});

  // When this component mounts, it invoke API's getNight method that takes in an id and returns its details
  // if the id changes, run this function again
  const { id } = useParams();
  useEffect(() => {
    API.getRecipe(id)
      .then((res) => setRecipe(res.data))
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          {/* Jumbotron accepts props.children thats why we can include an <h1> */}
          <Jumbotron>
            <h1>DETAIL OF SPECIFIC RECIPE RECORD IN COLLECTION</h1>
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
              {/* Link belongs to react-router dom. We want this to go to the suggested wine pairings page*/}
              <Link to="/wine">
                {/* AddRecipeBtn accepts props. We want the onClick callback tosave the users recipe selection*/}
                <AddRecipeBtn onClick={()=>{}}></AddRecipeBtn>
              </Link>
            </p>
            <h1>ID</h1>
            <p>{recipe._id}</p>
            <h1>NAME</h1>
            <p>{recipe.name}</p>
            <h1>INGREDIENTS</h1>
            <p>(need means of providing key for indexes of ingredients array)</p>
            <h1>IMAGE</h1>
            <p>(currently does not work because "src=" is duplicated in props and listed in image's property value string)</p>
            <RecipeImg src={recipe.image}></RecipeImg>
            <h1>INSTRUCTIONS</h1>
            <p>(need means of providing key for indexes of instructions array)</p>
            <h1>MAIN TYPE</h1>
            <p>{recipe.type}</p>
            <h1>SUGGESTED WINE PAIRING</h1>
            <p>{recipe.wine} - {recipe.subwine}</p>

            
            
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/recipe">← Back to Recipe List</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;
