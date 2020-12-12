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
        shoppingList: action.shoppingList,
        loading: false,
      };
    
    //adds object to the favs array once it's been added to the db       
    case "updateFavs":
      return {
        ...state,
        favs: [...state.favs, action.favs],
        loading: false,
      };

    case "addToShoppingList":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.shoppingList],
        loading: false,
      };

    case "removeFromShoppingList":
      return {
        ...state,
        shoppingList: state.shoppingList.filter((item) => {
          return item.id !== action.id;
        })
      };
    
    case "removeFav":
      return {
        ...state,
        favs: state.favs.filter((fav) => {
          return fav.id !== action.id;
        })
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
        recipeThumb: action.recipeThumb,
        recipeWine: action.recipeWine,
        recipeSubWine: action.recipeSubWine,
        recipeIngredients: action.recipeIngredients,
        recipeDirections: action.recipeDirections,
        loading: false,
      };  

    //called when user clicks a favorite detail  
    case "setCurrentFav":
      return{
        ...state,
        currentFav: action.currentFav,
        loading: false, 
      }  
    
    //clears out the current selection after user is finished adding wine
    case "clearSelection":
      return{
        ...state,
        selectionId: action.selectionId,
        recipeId: action.recipeId,
        recipeName: action.recipeName,
        recipeType: action.recipeType,
        recipeImage: action.recipeImage,
        recipeThumb: action.recipeThumb,
        recipeWine: action.recipeWine,
        recipeSubWine: action.recipeSubWine,
        recipeIngredients: action.recipeIngredients,
        recipeDirections: action.recipeDirections,
        wineId: action.wineId,
        wineName: action.wineName,
        wineType: action.wineType,
        wineBlurb: action.wineBlurb,
        wineImage: action.wineImage,
        wineThumb: "",
        wineVintages: action.wineVintages,
        loading: false,

      }
      
    case "removeCurrentFav":
      return{
        ...state,
        currentFav: action.currentFav,
        loading: false,
      };  


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
   recipeThumb: "",
   recipeWine: "",
   recipeSubWine: "",
   recipeIngredients: [],
   recipeDirections: [],
   wineId: "",
   wineName: "",
   wineType: "",
   wineBlurb: "",
   wineImage: "",
   wineThumb: "",
   wineVintages: [],
   shoppingList: [],
   loading: false,
 });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
