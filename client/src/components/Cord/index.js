import React from "react";
import { Card } from "react-bootstrap";

function Cord({name, image}){


return(

    <Card style={{ width: "10rem" }} className="text-center">
    <Card.Img
      className="rounded-circle"
      variant="top"
      src={image}
      alt={name}
    />
    <Card.Title>{name}</Card.Title>
  </Card>

);

}

export default Cord;