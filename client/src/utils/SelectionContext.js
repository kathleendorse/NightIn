import React from "react";
 
const SelectionContext = React.createContext({
  recipeSelection: "",
  wineSelection: "",
});
 
export default SelectionContext;


//testing out means for creating a current selection state that will: 
    //update the recipeSelection when a recipe is selected 
        //& recipe info to wine page to use
    //update the wineSelection when a wine is selected
    //be available for the final result page to render to the dom
