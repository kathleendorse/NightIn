import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Input from "../components/Input";
import Butt from "../components/Butt";
import { Card } from "react-bootstrap";
import { useUserContext } from "../utils/UserContext";
import Nav from "../components/Nav";

function Recipe() {
  const [state, dispatch] = useUserContext();

  // Using the useState hook [nameOfState, methodForUpdatingState] = useState( setInitalValueofState )
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
    //Container & Col accepts props to use for their attributes
    //Jumbotron uses props.children to have an h5 nested

    <div>
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h5>
                The name of our mongo database is nightindb. In this version the
                data we are using is coming from a collection called recipes.
                When the user enters a term and clicks the search button,
                recipes containing that term appear below.
              </h5>
            </Jumbotron>
          </Col>
        </Row>

        <Row>
          <Col size="md-6 sm-12">
            <form>
              <Container fluid>
                <Row>
                  <Col size="md-6 sm-12">
                    <Input
                      name="RecipesSearch"
                      //assigning the search term to the input value
                      value={recipesSearch}
                      //update the search term when the input changes
                      onChange={handleInputChange}
                      placeholder="Search For a Recipe"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Butt
                      //make the API call when the button is clicked
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg btn-lg"
                    >
                      Search
                    </Butt>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>

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
                          alt={`photo of ${recipe.title}`}
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
