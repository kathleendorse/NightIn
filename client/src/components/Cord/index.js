import React from "react";
import { Card } from "react-bootstrap";

function Cord({ name, image }) {
  return (
    <Card style={{ width: "10rem", height: "20rem" }} className="text-center">
      <Card.Img variant="top" src={image} alt={name} />

      <Card.Body>{name}</Card.Body>
    </Card>
  );
}

export default Cord;
