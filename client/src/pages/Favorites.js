import React, { useEffect } from "react";
import { Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import { useUserContext } from "../utils/UserContext";


export default function Favorites() {
  const [state, dispatch] = useUserContext();

  //runs when component loads
  useEffect(() => {
    clearSelection();
  });

  //clears out the users last selection from state (reset)
  //clears out the users current favorite selection
  function clearSelection (){
    dispatch({
      type: "clearSelections",
      selectionId: "" ,  
      recipeId: "",
      recipeName: "",
      recipeType: "",
      recipeImage: "",
      recipeWine: "",
      recipeSubWine: "",
      recipeIngredients: "",
      recipeDirections: "",
      wineId: "",
      wineName: "",
      wineType: "",
      wineBlurb: "",
      wineImage: "",
      wineVintages: "",
      currentFav: "",  
    });

  }


  //maps over state.favs and renders Favorite Item Component which uses these props.
  return (
    <Container fluid>
      {state.favs.map((fav) => (
        <FavoriteItem key={fav.id}
        id={fav.id}
        recipeName={fav.recipeName}
        recipeImage={fav.recipeImage}
        wineName={fav.wineName}
        wineImage={fav.wineImage}
        />
      ))}
    </Container>
  );
}
