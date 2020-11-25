import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Input from "../components/Input";
import SearchBtn from "../components/SearchBtn";


function Nightin() {
  // Setting our component's initial state
  //the state for this component is "nightin". by default it is an empty array
  //setNightin is how we manage/update it
  const [nightin, setNightin] = useState([]);

  // when the component mounts we invoke the loadNightin function
  //because [] is empty, useEffect will only run the one time
  useEffect(() => {
    loadNightin();
  }, []);

  //invokes API's getNightin method that returns all the entries in the night collection 
  function loadNightin() {
    API.getNightin()
      .then((res) => setNightin(res.data))
      .catch((err) => console.log(err));
  }


  //THIS WILL BE REMOVED BUT SOMETHING SIMILAR WILL BE USED IN THE FAVORITES PAGE
  //invokes API's deletenight method that takes in an id 
  //removes it from the collection
  //then reloads calls the loadNightin function to return an updated list
  function deleteNight(id) {
    API.deleteNight(id)
      .then((res) => loadNightin())
      .catch((err) => console.log(err));
  }


  //LOAD NIGHT WILL NEED TO BE REMOVED BECAUSE WE DON'T WANT ALL THE RESULT TO APPEAR WHEN THE PAGE LOADS
  //HERE'S WE ACTUALLY NEED FUNCTIONS FOR: 
    //-SAVING THE INPUT VALUE ONCHANGE
    //-PASSING THE INPUT AS A QUERY PARAMETER TO A HANDLESUBMIT FUNCTION THAT 
       //FINDS RECIPES WITH THE INPUT VALUE SOMEWHERE IN THE RECIPE TITLE 
      //& DISPLAY LIST ITEMS FOR EACH OF THOSE RESULTS 



  return (
    //Container & Col accepts props to use for their attributes
    //Jumbotron uses props.children to have an h5 nested
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
          
          {/* currently this form does nothing */}
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
