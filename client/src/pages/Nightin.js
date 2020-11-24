import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
//ADDED--------------
import Input from "../components/Input";
import SearchBtn from "../components/SearchBtn";
//------------------

function Nightin() {
  // Setting our component's initial state
  const [nightin, setNightin] = useState([]);

  // Load all nightin and store them with setNightin
  useEffect(() => {
    loadNightin();
  }, []);

  // Loads all nightin and sets them to nightin
  function loadNightin() {
    API.getNightin()
      .then((res) => setNightin(res.data))
      .catch((err) => console.log(err));
  }

  // Deletes a night from the database with a given id, then reloads nightin from the db//
  function deleteNight(id) {
    API.deleteNight(id)
      .then((res) => loadNightin())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h5>
              The name of our mongo database is nightindb. In this version the
              data we are using is coming from a collection called nightin. This
              is the result of a find all on that collection. The Night
              collection is purely a test for connecting to a db and returning
              records from a collection.
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
                    name="RecipeSearch"
                    // value={recipeSearch}
                    value = "placeholder"
                    // onChange={handleInputChange}
                    onChange = {()=>{}}
                    placeholder="Search For a Recipe"
                  />
                </Col>
                <Col size="xs-3 sm-2">
                  <SearchBtn
                    // onClick={handleFormSubmit}
                    onClick={()=>{}}
                    type="success"
                    className="input-lg"
                  >
                      Search
                  </SearchBtn>
                </Col>
              </Row>
            </Container>
          </form>
        </Col>
      </Row>
      <Row>
        <Col size="md-6 sm-12">        
          {nightin.length ? (
            <List>
              {nightin.map((night) => (
                <ListItem key={night._id}>
                  <Link to={"/nightin/" + night._id}>
                    <strong>{night.name}</strong>
                  </Link>
                  <DeleteBtn onClick={() => deleteNight(night._id)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Nightin;
