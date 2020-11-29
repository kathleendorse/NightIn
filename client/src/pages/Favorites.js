import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import Photo from "../components/Photo";

export default function Favorites() {
  return (
    <Container fluid>
      <FavoriteItem />
    </Container>
  );
}
