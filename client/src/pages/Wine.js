import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import Cord from "../components/Cord";
import { useUserContext } from "../utils/UserContext";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Wine.css";

function Wine() {
  const [state, dispatch] = useUserContext();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    loadWines(state.recipeWine);

    //checks local storage to update state if state is empty
    let storageStatusId = JSON.parse(localStorage.getItem("_id"));
    let storageStatusEmail = JSON.parse(localStorage.getItem("email"));
    let storageStatusFavs = JSON.parse(localStorage.getItem("favs"));
    let storageStatusShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
    if (state._id === "" && storageStatusId){
      dispatch({
        type: "setCurrentUser",
        email: storageStatusEmail,
        _id: storageStatusId,
        favs: storageStatusFavs,
        shoppingList: storageStatusShoppingList,
      });
    } else {
      return;
    }

  }, [state.recipeWine, state._id, dispatch]);

  function loadWines(type) {
    API.getWines(type)
      .then((res) => setWines(res.data))
      .catch((err) => console.log(err));
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <Row className="justify-content-center">
            {" "}
            <Col size="md-12 sm-12">
              <h4>
                {state.recipeType} dishes generally pair well with{" "}
                {state.recipeWine} wines.
              </h4>
              <h5>
                For {state.recipeName} our experts recommend{" "}
                <span id="wineType">{state.recipeSubWine}</span> .
              </h5>
              <p className="lead">
                Click on a {state.recipeWine} wine to learn more and add to your
                pairing
              </p>
              <p></p>
            </Col>{" "}
          </Row>
        </Jumbotron>

        <Row>
          <Col size="md-12 sm-12">
            <Container className="justify-content-center">
              {wines.length ? (
                <Carousel responsive={responsive}>
                  {wines.map((wine) => (
                    <div key={wine._id}>
                      <Link to={"/wine/" + wine._id}>
                        <Cord name={wine.name} image={wine.thumb} />
                      </Link>
                    </div>
                  ))}
                </Carousel>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Wine;
