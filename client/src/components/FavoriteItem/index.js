import React from "react";

//import { Col, Row, Container } from "./../Grid";
import { Row } from "./../Grid";
//import Photo from "./../Photo";
// import { Button, Card } from "react-bootstrap";
//import { Card } from "react-bootstrap";
import Cord from "../Cord";
import { Link } from "react-router-dom";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function FavoriteItem({id, recipeName, recipeImage, wineName, wineImage}) {
  return (

    <Row>
      <Link to={"/favorites/" + id}>
      {/* <Col size="sm-4"> */}
        <Cord 
            image={recipeImage}
            name={recipeName}
          />
      {/* </Col> */}
      {/* <Col size="sm-4"> */}
        <Cord 
            image={wineImage}
            name={wineName}
          />

      {/* </Col> */}
      {/* <Col size="sm-4">
        <Button variant="outline-info" size="sm" href="#" role="button">
          View details &raquo;
        </Button>
        <p>
          <Button variant="outline-secondary" size="sm" href="#" role="button">
            Add Note
          </Button>
        </p>
      </Col> */}
      </Link>
    </Row>
    
  );
}

export default FavoriteItem;
