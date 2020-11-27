import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
//import AddRecipeBtn from "../components/AddRecipeBtn";
//import RecipeImg from "../components/RecipeImg";
import API from "../utils/API";

function WineDetail(props){
    const [wine, setWine] = useState({});

    const { id } = useParams();
    useEffect(() => {
        API.getWine(id)
            .then((res) => setWine(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    return(
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>
                            DETAIL OF A SPECIFIC WINE RECORD IN COLLECTION
                        </h1>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-10 md-offset-1">
                    <article>
                        {/* <p>
                            <Link to="/home">

                            </Link>
                        </p> */}
                        <h1>ID</h1>
                        <p>{wine._id}</p>
                        <h1>NAME</h1>
                        <p>{wine.name}</p>
                        <h1>TYPE</h1>
                        <p>{wine.type}</p>
                    </article>
                </Col>
            </Row>
            <Row>
                <Col size="md-2">
                    <Link to="/wine">← Back to Wine List</Link>
                </Col>
            </Row>
        </Container>
    );
}

export default WineDetail;