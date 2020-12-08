import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
import API from "../utils/API";
import { useUserContext } from "../utils/UserContext";
// import Nav from "../components/Nav";

function WineDetail(props) {

  const [wine, setWine] = useState({});
  const [vintages, setVintages] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    handleWine(id);
    handleVintages(id);
//---------------------------------------------------
    //currentWine();
//---------------------------------------------------
  }, [id]);

  function handleWine(id) {
    API.getWine(id)
      .then((res) => setWine(res.data))
      .catch((err) => console.log(err));
  }

  function handleVintages(id) {
    API.getWine(id)
      .then((res) => setVintages(res.data.vintages))
      .catch((err) => console.log(err));
  }

//---------------------------------------------------
const [state, dispatch] = useUserContext();

function addWine(){
  API.addWine({
    userId: state._id,
    favId: state.favs.pop()._id,
    wineId: wine._id,
 })
 .then((res)=> {
   console.log("Updated User Favorites: ",res.data);
 })
 .catch((err)=> console.log(err));
}

  //this function updates state.favs 
  function updatedUser() {
    API.findUser(state._id)
    .then((res)=>{
      dispatch({
        type: "updateFavs",
        favs: res.data,
      });
    })
    .catch((err) => console.log(err));
  }

  //this function calls multiple functions to get the updated user and state
  function handleSubmit (){
    addWine();
    updatedUser();
  }


//---------------------------------------------------

  return (
    <div>
      <Container fluid>
        <Row>
          <Col size="md-10 md-offset-1">
            <Row>
              <Link to="/wine">
                <Butt

                  onClick={() => {}}
                  type="success"
                  className="input-lg btn-lg"
                >
                  ← Back
                </Butt>
              </Link>
              <Link to="/favorites">
                <Butt
                  onClick={handleSubmit}
                  type="success"
                  className="input-lg btn-lg"
                >
                  + Select Wine
                </Butt>
              </Link>
            </Row>
            <Row>
              <Col size="md-10">
                <Photo src={wine.image} alt={wine.name}></Photo>
                <br></br>
                <h1>{wine.name}</h1>
                <h4>{wine.blurb}</h4>
              </Col>
            </Row>
            <Row>
              <Col size="md-10">
                <h2>VINTAGES</h2>
                {vintages.length ? (
                  <List>
                    {vintages.map((vintage) => (
                      <ListItem key={vintage.id}>{vintage.vin}</ListItem>
                    ))}
                  </List>
                ) : (
                  <p>No Results to Display</p>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WineDetail;
