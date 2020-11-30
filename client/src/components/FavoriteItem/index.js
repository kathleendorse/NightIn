import React from "react";

import { Col, Row, Container } from "./../Grid";
import Photo from "./../Photo";
import { Button, Card } from "react-bootstrap";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function FavoriteItem() {
  return (

    <Row>
      {/* <Col size="sm-4"> */}
        <Card style={{ width: "10rem" }} className="text-center">
          <Card.Img
            className="rounded-circle"
            variant="top"
            src="https://via.placeholder.com/150"
          />
          <Card.Title>New York Strip Steak with Wild Rice and Broccoli</Card.Title>
        </Card>
      {/* </Col> */}



      {/* <Col size="sm-4"> */}
        <Card style={{ width: "10rem" }}>
          <Card.Img
            className="rounded-circle"
            variant="top"
            src="https://via.placeholder.com/150"
          />
          <Card.Title>Wine Name</Card.Title>
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
