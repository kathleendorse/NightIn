import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { useUserContext } from "../utils/UserContext";
//when this component is instantiated it will be passed a "prop"
function RecipeDetail() {
  const [state, dispatch] = useUserContext();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState([]);

  const { id } = useParams();

  useEffect(() => {

    API.getRecipe(id)
    .then((res) => {
      setRecipe(res.data);
      setIngredients(res.data.ingredients);
      setDirections(res.data.directions);
    })
    .catch((err) => console.log(err));

  //checks local storage to update state if state is empty
  let storageStatusId = JSON.parse(localStorage.getItem("_id"));
  let storageStatusEmail = JSON.parse(localStorage.getItem("email"));
  let storageStatusFavs = JSON.parse(localStorage.getItem("favs"));
  let storageStatusShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
  if (state._id === "" && storageStatusId){
    dispatch({
      type: "setCurrentUser",
      email: storageStatusEmail,
      _id: storageStatusId,
      favs: storageStatusFavs,
      shoppingList: storageStatusShoppingList,
    });
  } else {
    return;
  }

  }, [id, state._id, dispatch]);

  //updates the current Recipe Selections in state
  function updateUserRecipeSelection() {
    dispatch({
      type: "updateRecipe",
      selectionId: Math.floor(Math.random() * 100000).toString(),
      recipeId: recipe._id,
      recipeName: recipe.name,
      recipeType: recipe.type,
      recipeImage: recipe.image,
      recipeImageMobile: recipe.imageMobile,
      recipeThumb: recipe.thumb,
      recipeWine: recipe.wine,
      recipeSubWine: recipe.subwine,
      recipeIngredients: recipe.ingredients,
      recipeDirections: recipe.directions,
    });
    console.log("Selected: ", state.recipeName);
  }

  //calls multiple functions to get the updated user and state
  function handleSubmit() {
    updateUserRecipeSelection();
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <br></br>
          <h2 className="text-center">{recipe.name}</h2>
        </Col>
      </Row>
      <Row>
        <Link to="/recipe">
          <Butt
            onClick={() => {}}
            type="secondary"
            className="input-md btn-md btn-outline-secondary"
          >
            ← Back
          </Butt>
        </Link>
        <Link to="/wine">
          <Butt
            type="secondary"
            className="input-md btn-md btn-outline-secondary"
            onClick={handleSubmit}
          >
            + Add to Favorites
          </Butt>
        </Link>
        <br></br>
      </Row>
      <Row>
        <Col size="md-12" className="justify-content-center">
          <div className="text-center">
            <Photo src={recipe.image} 
                  // srcset recipe.image for Desktop, recipe.imageMobile for Mobile
                   
                  //srcset={recipe.image} media="(min-width: 1000px)"
                  //srcset={recipe.imageMobile} media="(max-width: 999px)"
                   alt={recipe.name}>
            </Photo>
          </div>
          <br></br>
        </Col>
      </Row>
      <Row>
        <Col size="md-5">
          <br></br>
          <h3 className="text-center">INGREDIENTS</h3>
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
          <br></br>
          <h3 className="text-center">INSTRUCTIONS</h3>
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
    </Container>
  );
}
export default RecipeDetail;
