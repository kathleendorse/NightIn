import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Kates() {
  // Setting our component's initial state
  const [kates, setKates] = useState([])


  // Load all kates and store them with setKates
  useEffect(() => {
    loadKates()
  }, [])

  // Loads all kates and sets them to kates
  function loadKates() {
    API.getKates()
      .then(res => 
        setKates(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a kate from the database with a given id, then reloads kates from the db//
  function deleteKate(id) {
    API.deleteKate(id)
      .then(res => loadKates())
      .catch(err => console.log(err));
  }


    return (
      <Container fluid>
        <Row>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>All Entries That Exist in the Kates collection in the NightInDB</h1>
            </Jumbotron>
            {kates.length ? (
              <List>
                {kates.map(kate => (
                  <ListItem key={kates._id}>
                    <Link to={"/kates/" + kate._id}>
                      <strong>
                        {kate.title}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteKate(kate._id)} />
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


export default Kates;
