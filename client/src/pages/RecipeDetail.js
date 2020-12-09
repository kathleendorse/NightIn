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
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

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

  //adds an object to the user's favs array and returns a confirmation
  function addRecipe() {
    API.addRecipe({
      userId: state._id,
      favorite: recipe,
    })
      .then((res) => {
        console.log("Updated User Favorites: ", res.data);
      })
      .catch((err) => console.log(err));
  }

  //updates state.favs 
  function updatedUser() {
    API.findUser(state._id)
    .then((res)=>{
      dispatch({
        type: "updateFavs",
        favs: res.data,
      });
    })
    .catch((err) => console.log(err));
  }

  //calls multiple functions to get the updated user and state
  function handleSubmit (){
    addRecipe();
    updatedUser();
  }



  return (
    <Container fluid>
      <Row>
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
                  onClick={handleSubmit}
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
