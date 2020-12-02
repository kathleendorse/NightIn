import React, { useState, useEffect, useContext } from "react";
import { Col, Row, Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
// import RecipeImg from "../components/RecipeImg";
import { myContext } from "./Context";
import Photo from "../components/Photo";

export default function Favorites() {
  const ctx = useContext(myContext);
  return (
    <Container fluid>
      <FavoriteItem />
    </Container>
  );
}
