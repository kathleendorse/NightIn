import React from "react";

//import { Col, Row, Container } from "./../Grid";
import { Row, Col } from "./../Grid";
//import Photo from "./../Photo";
// import { Button, Card } from "react-bootstrap";
//import { Card } from "react-bootstrap";
import Cord from "../Cord";
import { Link } from "react-router-dom";
import Butt from "../Butt";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function FavoriteItem({
  id,
  recipeName,
  recipeImage,
  wineName,
  wineImage,
  onClick,
}) {
  return (
    <Row>
      <Col size="sm-4">
        <Cord image={recipeImage} name={recipeName} />
      </Col>
      <Col size="sm-4">
        <Cord image={wineImage} name={wineName} />
      </Col>
      <Col size="sm-4">
        <Link to={"/favorites/" + id}>
          <Butt
            type="secondary"
            className="input-md btn-md btn-outline-secondary"
            onClick={() => {}}
          >
            View details &raquo;
          </Butt>
        </Link>

        <Butt
          type="secondary"
          className="input-md btn-md btn-outline-secondary"
          onClick={onClick}
        >
          Delete
        </Butt>
      </Col>
    </Row>
  );
}

export default FavoriteItem;
