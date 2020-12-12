import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import { useUserContext } from "../utils/UserContext";
import API from "../utils/API";

export default function Favorites() {
  const [state, dispatch] = useUserContext();
  const [favs, setFavs] = useState([]);

  //runs when component loads
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
    dispatch({
      type: "removeCurrentFav",
      currentFav: "",
    });
    setFavs(state.favs);
  }, [state.favs, dispatch]);

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

  //maps over state.favs and renders Favorite Item Component which uses these props.
  return (
    <Container fluid>
      {favs.map((fav) => (
        <FavoriteItem
          key={fav.id}
          id={fav.id}
          recipeName={fav.recipeName}
          recipeImage={fav.recipeImage}
          wineName={fav.wineName}
          wineImage={fav.wineImage}
          onClick={() => removeFavorite(fav.id)}
        />
      ))}
    </Container>
  );
}
