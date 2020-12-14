import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Input from "../components/Input";
//import Butt from "../components/Butt";
import Cord from "../components/Cord";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useUserContext } from "../utils/UserContext";
import "./Recipe.css";

function Recipe() {
  //recipe results
  const [recipes, setRecipes] = useState([]);
  //search term
  const [recipesSearch, setRecipesSearch] = useState(""); //ADDED
  const [state, dispatch] = useUserContext();


  useEffect(() => {

    //evaluates if there is input to findall or find specific
    if (recipesSearch){
      API.getRecipesQuery(recipesSearch)
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
    }
    else{
    API.getRecipes()
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
    }


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

  

  },[state._id, recipesSearch, dispatch]);


  //when the input value changes we update the nightinSearch value
  const handleInputChange = (event) => {
    const { value } = event.target;
    setRecipesSearch(value);
  };

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
      items: 1,
    },
  };
  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <Row>
            {" "}
            <Col size="md-12 sm-12">
              <p className="lead">
                TEMP TEXT: The name of our mongo database is nightindb. In this
                version the data we are using is coming from a collection called
                recipes.
              </p>
              When the user enters a term and clicks the search button, recipes
              containing that term appear below.
              <p></p>
            </Col>{" "}
          </Row>
          <br></br>

          <Row>
            <Col size="md-12 sm-12">
              <form>
                <Container fluid>
                  <div className="input-group justify-content-center">
                    <Input
                      style={{
                        backgroundColor: "#DCDCDC",
                        margin: "10px",
                      }}
                      id = "search"
                      name="RecipesSearch"
                      //assigning the search term to the input value
                      value={recipesSearch}
                      //update the search term when the input changes
                      onChange={handleInputChange}
                      placeholder="Search for an ingredient .."
                    />
                  </div>
                </Container>
              </form>
            </Col>
          </Row>
        </Jumbotron>

        <Row>
          <Col size="md-12 sm-12">
            <Container>
              {/* ternary operator - show no results if the nightin state is empty*/}
              {recipes.length ? (
                <Carousel responsive={responsive}>
                  {/* maping over the array in nightin state. for each index we do the following*/}
                  {recipes.map((recipe) => (
                    // create a list item with a key equal to the index's id **react requires a unique KEY to use for arrays indexes. here we assign it the id of the recipe object
                    <div key={recipe._id}>
                      <Link to={"/recipe/" + recipe._id}>
                        <Cord name={recipe.name} image={recipe.thumb} />
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

export default Recipe;
