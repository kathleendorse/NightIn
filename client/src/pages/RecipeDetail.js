import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
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
          <article>

            <p>
              <Link to="/recipe">
                <Butt 
                  onClick={()=>{}}
                  type="success"
                  className="input-lg btn-lg"
                >
                  ← Back
                </Butt>
              </Link>
              <Link to="/wine">
                <Butt 
                  type="success"
                  className="input-lg btn-lg"
                >
                  + Select Recipe
                </Butt>
              </Link>
            </p>
            <h1>ID</h1>
            <p>{recipe._id}</p>
            <h1>NAME</h1>
            <p>{recipe.name}</p>
            <h1>INGREDIENTS</h1>
            <p>(need means of providing key for indexes of ingredients array)</p>
            <h1>IMAGE</h1>
            <Photo src={recipe.image} alt={recipe.name}></Photo>
            <h1>INSTRUCTIONS</h1>
            <p>(need means of providing key for indexes of instructions array)</p>
            <h1>MAIN TYPE</h1>
            <p>{recipe.type}</p>
            <h1>SUGGESTED WINE PAIRING</h1>
            <p>{recipe.wine} - {recipe.subwine}</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeDetail;
