import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { useUserContext } from "../utils/UserContext";
import Butt from "../components/Butt";
import API from "../utils/API";
import { Link } from "react-router-dom";

export default function ShoppingList() {
  const [state, dispatch] = useUserContext();
  const [shoppingList, setShoppingList] = useState([]);

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


    setShoppingList(state.shoppingList);
    setLocal(shoppingList);

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

  }, [state.shoppingList, dispatch, shoppingList, state._id]);



  
  function removeIng(ing) {
    const userObj = {
      userId: state._id,
      ing: ing,
    };
    API.deleteIng(userObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch({
      type: "removeFromShoppingList",
      id: ing.id,
    });
  }

  function setLocal (arr){
    localStorage.setItem("shoppingList", JSON.stringify(arr));
  }

  return (
  
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Shopping List</h1>
              <p>Select Ingredients from your Favorites</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            {shoppingList.length ? (
              <List>
                {shoppingList.map((ingredient) => (
                  <ListItem key={Math.floor(Math.random() * 1000000).toString()}>
                    {ingredient.ing}
                    <br></br>
                    <Butt
                      type="secondary"
                      className="input-md btn-md btn-outline-secondary"
                      onClick={() => removeIng(ingredient)}
                    >
                      - Shopping List
                    </Butt>
                  </ListItem>
                ))}
              </List>
            ) : (
              <Container fluid className = "justify-content-center">
                <h4>Nothing Saved in Shopping List yet! Click <Link to="/favorites"><span id="link">here</span></Link> to add ingredients from your favorite recipes.</h4>
              </Container>
            )}
          </Col>
        </Row>
      </Container>

  );
}
