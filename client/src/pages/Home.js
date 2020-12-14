import React, { useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { useUserContext } from "../utils/UserContext";
import { Redirect } from "react-router-dom";

function Home({ email }) {
  const [state, dispatch] = useUserContext();

  useEffect(() => {
    dispatch({
      type: "updateRecipe",
      selectionId: "",
      recipeId: "",
      recipeName: "",
      recipeType: "",
      recipeImage: "",
      recipeImageMobile: "",
      recipeThumb: "",
      recipeWine: "",
      recipeSubWine: "",
      recipeIngredients: "",
      recipeDirections: "",
    });

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
  }, [dispatch, state._id]);





  return (
    <Container fluid className="justify-content-center">
      {!email && <Redirect to="/login" />}
      <Row className="justify-content-center">
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h4>
            Welcome <span className="text-muted">{state.email}</span>!
            </h4>
            <br></br>
            <p className="lead">
            Our mission is to help Wine and Food lovers alike curate perfectly matched meals.<br></br>Starting with a recipe of your choice, our proprietary recommendation engine will suggest a nice drink pairing with your dinner. <br></br>Store your pairings to favorites for future reference and get the night started with a built-in shopping list. 
            </p>
            <br></br>
            <Link to={"/recipe"}>
              <button type="button" className="btn btn-secondary btn-lg">
                Start Planning Your Night In
              </button>
            </Link>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
