import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Input from "../components/Input";
import Butt from "../components/Butt";
import { Card } from "react-bootstrap";

function Recipe() {

  //recipe results
  const [recipes, setRecipes] = useState([]);
  //search term
  const [recipesSearch, setRecipesSearch] = useState(""); //ADDED

  //when the input value changes we update the nightinSearch value
  const handleInputChange = (event) => {
    const { value } = event.target;
    setRecipesSearch(value);
  };

  //when the form is submitted we use the getNightin method from the API to find recipes and update the nightinState
  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.getRecipes(recipesSearch)
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  };
  return (

    <div>
      <Container fluid>
        <Jumbotron>
          <Row className="justify-content-center">
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
                  <Input
                    style={{
                      backgroundColor: "#DCDCDC",
                    }}
                    name="RecipesSearch"
                    //assigning the search term to the input value
                    value={recipesSearch}
                    //update the search term when the input changes
                    onChange={handleInputChange}
                    placeholder="Search For a Recipe"
                  />
                  <br></br>
                  <Butt
                    onClick={handleFormSubmit}
                    type="secondary"
                    className="input-md btn-md btn-outline-secondary"
                  >
                    Search
                  </Butt>
                </Container>
              </form>
            </Col>
          </Row>
        </Jumbotron>

        <Row>
          <Col size="md-6 sm-12">
            {/* ternary operator - show no results if the nightin state is empty*/}
            {recipes.length ? (
              <List>
                {/* maping over the array in nightin state. for each index we do the following*/}
                {recipes.map((recipe) => (
                  // create a list item with a key equal to the index's id **react requires a unique KEY to use for arrays indexes. here we assign it the id of the recipe object
                  <ListItem key={recipe._id}>
                    <Link to={"/recipe/" + recipe._id}>
                      <Card style={{ width: "10rem" }} className="text-center">
                        <Card.Img
                          className="rounded-circle"
                          variant="top"
                          src={recipe.image}
                          alt={`photo of ${recipe.name}`}
                        />
                        <Card.Title>{recipe.name}</Card.Title>
                      </Card>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Recipe;
