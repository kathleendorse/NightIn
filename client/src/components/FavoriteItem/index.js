import React from "react";

//import { Col, Row, Container } from "./../Grid";
import { Row } from "./../Grid";
//import Photo from "./../Photo";
// import { Button, Card } from "react-bootstrap";
import { Card } from "react-bootstrap";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function FavoriteItem({recipeName, recipeImage, wineName, wineImage}) {
  return (

    <Row>
      {/* <Col size="sm-4"> */}
        <Card style={{ width: "10rem" }} className="text-center">
          <Card.Img
            className="rounded-circle"
            variant="top"
            src={recipeImage}
            alt={recipeName}
          />
          <Card.Title>{recipeName}</Card.Title>
        </Card>
      {/* </Col> */}
      {/* <Col size="sm-4"> */}
        <Card style={{ width: "10rem" }}>
          <Card.Img
            className="rounded-circle"
            variant="top"
            src={wineImage}
            alt={wineName}
          />
          <Card.Title>{wineName}</Card.Title>
        </Card>
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
    </Row>
    
  );
}

export default FavoriteItem;
