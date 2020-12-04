import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { useUserContext } from "../utils/UserContext";
//when this component is instantiated it will be passed a "prop"
function RecipeDetail(props) {
  const [state, dispatch] = useUserContext();
  //we use the useState hook to create:
  //a state object for this component called "night" that is an empty object by default
  //a method for managing/updating this state called "setNight"
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);
  // When this component mounts, it invoke API's getNight method that takes in an id and returns its details
  // if the id changes, run this function again
  const { id } = useParams();
  useEffect(() => {
    handleRecipe(id);
    handleIngredients(id);
    handleDirections(id);
  }, [id]);
  function handleRecipe(id) {
    API.getRecipe(id)
      .then((res) => {
        setRecipe(res.data);
      })
      .catch((err) => console.log(err));
  }
  function handleIngredients(id) {
    API.getRecipe(id)
      .then((res) => setIngredients(res.data.ingredients))
      .catch((err) => console.log(err));
  }
  function handleDirections(id) {
    API.getRecipe(id)
      .then((res) => setDirections(res.data.directions))
      .catch((err) => console.log(err));
  }
  //added
  function addRecipe() {
    API.addRecipe({
      userId: state.user.id,
      favorite: recipe._id,
    })
      .then((res) => {
        dispatch({
          type: "setCurrentUser",
          user: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  //-------------
  return (
    <Container fluid>
      <Row>
        {/* Col accepts props for it's attributes that's how we set the size */}
        <Col size="md-10 md-offset-1">
          <article>
            <Row>
              <Link to="/recipe">
                <Butt
                  onClick={() => {}}
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
                  // added
                  onClick={addRecipe}
                  // ----
                >
                  + Select Recipe
                </Butt>
              </Link>
            </Row>
            <Row>
              <Col size="md-10">
                <Photo src={recipe.image} alt={recipe.name}></Photo>
                <br></br>
                <h1>{recipe.name}</h1>
              </Col>
              <Col size="md-5">
                <h2>INGREDIENTS</h2>
                {ingredients.length ? (
                  <List>
                    {ingredients.map((ingredient) => (
                      <ListItem key={ingredient.id}>{ingredient.ing}</ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
              <Col size="md-5">
                <h2>INSTRUCTIONS</h2>
                {directions.length ? (
                  <List>
                    {directions.map((direction) => (
                      <ListItem key={direction.id}>{direction.dir}</ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </article>
        </Col>
      </Row>
    </Container>
  );
}
export default RecipeDetail;
