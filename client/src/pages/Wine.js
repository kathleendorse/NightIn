import React from "react";
//import React, { useState} from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import { Link } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Wine(){
    return(
        <Container fluid>
            <Row>
                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h5>
                            This page will display suggested wine pairings
                        </h5>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-6 sm-12">
                    <List>
                        <ListItem>
                            Suggestion
                        </ListItem>
                    </List>
                </Col>
            </Row>
        </Container>
    )
}
export default Wine;