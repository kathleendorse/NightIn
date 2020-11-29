import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import RecipeImg from "../components/RecipeImg";
import { myContext } from "./Context";

export default function Favorites() {
  const ctx = useContext(myContext);
  console.log(ctx);
  return (
    <Container fluid>
      <FavoriteItem />
    </Container>
  );
}
