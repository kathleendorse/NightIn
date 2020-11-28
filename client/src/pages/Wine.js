import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


function Wine(){

    const [wines, setWines] = useState([]);

    useEffect(() => {
        loadWines();
    }, []);
    
    function loadWines() {
        API.getWines()
          .then((res) => setWines(res.data))
          .catch((err) => console.log(err));
    }



    return(
        <Container fluid>
            <Row>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h5>
                            FindAll Wine Collection
                        </h5>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-6 sm-12">
                    {wines.length ? (
                        <List>
                            {wines.map((wine) => (
                                <ListItem key={wine._id}>
                                    {/* <Link to={"/nightin/" + wine._id}> */}
                                    <Link to={"/wine/" + wine._id}>    
                                        <strong>{wine.name}</strong>
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
    )
}
export default Wine;