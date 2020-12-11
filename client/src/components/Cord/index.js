import React from "react";
import { Card } from "react-bootstrap";

function Cord({ name, image }) {
  return (
    <Card
      style={{ width: "10rem", height: "20rem" }}
      className="text-center"
      className="shadow p-3 mb-5 bg-white rounded"
    >
      <Card.Img variant="top" src={image} alt={name} />

      <Card.Body>
        <Card.Subtitle>{name}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default Cord;
