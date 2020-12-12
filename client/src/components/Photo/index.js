import React from "react";

function Photo(props) {
  return <img src={props.src} alt={props.alt} {...props} />;
}

export default Photo;
