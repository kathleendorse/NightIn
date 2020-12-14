import React from "react";
import './style.css';

function Photo(props) {
  return  <img 
          className="foto" 
          src={props.src} 
          alt={props.alt} 
          {...props} />;
}

// const stile = {

// }

export default Photo;