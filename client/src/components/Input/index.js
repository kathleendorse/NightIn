import React from "react";
import "./style.css";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return <input className="form-control " type="text" {...props} />;
}

export default Input;
