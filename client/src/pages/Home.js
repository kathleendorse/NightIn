import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";

function Home(){
    return(
        <Container fluid>
            <Row>
                <Col size="md-10 sm-12">
                    <Jumbotron>
                        <h1>Start Planning Your Night In</h1>
                        <br></br>
                        <button>
                            <Link to={"/nightin"}>Start Planning Your Night In</Link>
                        </button>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;