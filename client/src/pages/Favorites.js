import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import { useUserContext } from "../utils/UserContext";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import "./Favorite.css";



export default function Favorites() {
  const [state, dispatch] = useUserContext();
  const [favs, setFavs] = useState([]);

  //runs when component loads
  useEffect(() => {

    setFavs(state.favs);
    setLocal(favs);

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

    //clears out state values from previous selection
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

    //clears out state values from previous favorite
    dispatch({
      type: "removeCurrentFav",
      currentFav: "",
    });
  }, [state.favs, dispatch, favs, state._id]);

  function removeFavorite(id) {
    const userObj = {
      userId: state._id,
      favId: id,
    };

    API.deleteFav(userObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    dispatch({
      type: "removeFav",
      id: id,
    });
  }

  function setLocal(arr){
    localStorage.setItem("favs", JSON.stringify(arr));    
  }



  //maps over state.favs and renders Favorite Item Component which uses these props.
  return (
    
    <Container fluid>

      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>Favorites</h1>
            <p>Add Items to Favorites from the home page</p>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12 sm-12">
        {favs.length ? (
          <Container className = "justify-content-center">
            {favs.map((fav) => (
              <FavoriteItem
                key={fav.id}
                id={fav.id}
                recipeName={fav.recipeName}
                recipeImage={fav.recipeThumb}
                wineName={fav.wineName}
                wineImage={fav.wineThumb}
                onClick={() => removeFavorite(fav.id)}
              />
            ))}
          </Container>
        ) : (
          <Container fluid className = "justify-content-center">
 
            <h4>Nothing Saved in Favorites yet! Click <span id="link"><Link to="/recipe">here</Link></span> to get started </h4>

          </Container>
        )}
          
        </Col>
      </Row>
    </Container>
  );
}

