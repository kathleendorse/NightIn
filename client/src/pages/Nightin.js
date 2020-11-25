import React, { useState} from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Input from "../components/Input";
import SearchBtn from "../components/SearchBtn";


function Nightin() {

  // Using the useState hook [nameOfState, methodForUpdatingState] = useState( setInitalValueofState )
  //recipe results
  const [nightin, setNightin] = useState([]);
  //search term
  const [nightinSearch, setNightinSearch] = useState(""); //ADDED


  //when the input value changes we update the nightinSearch value
  const handleInputChange = event => {
    const { value } = event.target;
    setNightinSearch(value);
  }

  //when the form is submitted we use the getNightin method from the API to find recipes and update the nightinState
  const handleFormSubmit = event => {
    event.preventDefault();
    API.getNightin(nightinSearch)
      .then(res => setNightin(res.data)) 
      .catch(err => console.log(err));
  }

  return (
    //Container & Col accepts props to use for their attributes
    //Jumbotron uses props.children to have an h5 nested
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h5>
              The name of our mongo database is nightindb. In this version the
              data we are using is coming from a collection called nightin. 
              When the user enters a term and clicks the search button, recipes containing that term appear below.
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
                    name="NightinSearch"
                    //assigning the search term to the input value
                    value={nightinSearch}
                    //update the search term when the input changes
                    onChange={handleInputChange}
                    //onChange = {()=>{}}
                    placeholder="Search For a Recipe"
                  />
                </Col>
                <Col size="xs-3 sm-2">
                  <SearchBtn
                    //make the API call when the button is clicked
                    onClick={handleFormSubmit}
                    //onClick={()=>{}}
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

          {/* ternary operator - show no results if the nightin state is empty*/}
          {nightin.length ? (
            <List>
              {/* maping over the array in nightin state. for each index we do the following*/}
              {nightin.map((night) => (
                // create a list item with a key equal to the index's id **react requires a unique KEY to use for arrays indexes. here we assign it the id of the recipe object
                <ListItem key={night._id}>
                  {/* link to a detailed view of that recipe */}
                  <Link to={"/nightin/" + night._id}>
                    <strong>{night.name}</strong>
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
  );
}

export default Nightin;
