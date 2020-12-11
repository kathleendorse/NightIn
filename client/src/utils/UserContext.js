import React, { createContext, useReducer, useContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "setCurrentUser":
      return {
        ...state,
        _id: action._id,
        email: action.email,
        favs: action.favs,
        loading: false,
      };
    
    //adds object to the favs array once it's been added to the db       
    case "updateFavs":
      return {
        ...state,
        favs: [...state.favs, action.favs],
        loading: false,
      };


    //updates values for the user's current recipe Selection  
    case "updateRecipe":
      return {
        ...state,
        selectionId: action.selectionId,
        recipeId: action.recipeId,
        recipeName: action.recipeName,
        recipeType: action.recipeType,
        recipeImage: action.recipeImage,
        recipeWine: action.recipeWine,
        recipeSubWine: action.recipeSubWine,
        recipeIngredients: action.recipeIngredients,
        recipeDirections: action.recipeDirections,
        loading: false,
      };  

    //updates values for the user's current wine Selection  
    case "updateWine":
      return {
        ...state,
        wineId: action.wineId,
        wineName: action.wineName,
        wineType: action.wineType,
        wineBlurb: action.wineBlurb,
        wineImage: action.wineImage,
        wineVintages: action.wineVintages,
        loading: false,
      };   

    case "setCurrentFav":
      return{
        ...state,
        currentFav: action.currentFav,
        loading: false, 
      }  

    case "clearSelection":
      return{
        ...state,
        selectionId: action.selectionId,
        recipeId: action.recipeId,
        recipeName: action.recipeName,
        recipeType: action.recipeType,
        recipeImage: action.recipeImage,
        recipeWine: action.recipeWine,
        recipeSubWine: action.recipeSubWine,
        recipeIngredients: action.recipeIngredients,
        recipeDirections: action.recipeDirections,
        wineId: action.wineId,
        wineName: action.wineName,
        wineType: action.wineType,
        wineBlurb: action.wineBlurb,
        wineImage: action.wineImage,
        wineVintages: action.wineVintages,
        currentFav: action.currentFav,
        loading: false,

      }  


    case "loading":
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

//setting initial values for the UserState
const UserProvider = ({ value = [], ...props }) => {
 const [state, dispatch] = useReducer(reducer, {
   _id: "",
   email: "",
   favs: [],
   currentFav: "",
   selectionId: "",
   recipeId: "",
   recipeName: "",
   recipeType: "",
   recipeImage: "",
   recipeWine: "",
   recipeSubWine: "",
   recipeIngredients: [],
   recipeDirections: [],
   wineId: "",
   wineName: "",
   wineType: "",
   wineBlurb: "",
   wineImage: "",
   wineVintages: [],
   loading: false,
 });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
