import React, { useState, useEffect } from "react";
import { Container } from "../components/Grid";
import FavoriteItem from "../components/FavoriteItem";
import { useUserContext } from "../utils/UserContext";

export default function Favorites() {
  const [state, dispatch] = useUserContext();

  return (
    <Container fluid>
      {state.user.email ? <FavoriteItem /> : <div></div>}
    </Container>
  );
}
