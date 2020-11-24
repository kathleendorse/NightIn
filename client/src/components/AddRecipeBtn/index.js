import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddRecipeBtn(props) {
  return (
    <span className="addRecipe-btn" {...props} role="button" tabIndex="0">
      + Add Recipe
    </span>
  );
}

export default AddRecipeBtn;
