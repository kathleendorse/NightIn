import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import Photo from "../components/Photo";
import { useUserContext } from "../utils/UserContext";

export default function Favorites() {

  const [state, dispatch] = useUserContext();
  
  return (
    <Container fluid>
      <FavoriteItem />
    </Container>
  );
}
