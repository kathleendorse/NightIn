import React, { useState, useEffect } from "react";
//import React from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//import Cord from "../components/Cord";
import { useUserContext } from "../utils/UserContext";
import Butt from "../components/Butt";
import API from "../utils/API";

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
      recipeWine: "",
      recipeSubWine: "",
      recipeIngredients: "",
      recipeDirections: "",
    });
    setShoppingList(state.shoppingList);
  }, [state.shoppingList, dispatch]);

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

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h5>Shopping List</h5>
              <p>Select Ingredients from your Favorites</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          {/* <p>hi</p> */}
          <Col size="md-6 sm-12">
            {shoppingList.length ? (
              <List>
                {shoppingList.map((ingredient) => (
                  <ListItem key={ingredient.id}>
                    {ingredient.ing}
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
              <h3>No Items in Shopping List</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
