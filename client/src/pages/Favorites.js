import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";

export default function Favorites() {
  return (
    <Container fluid>
      <FavoriteItem />
    </Container>
  );
}
