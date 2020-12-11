import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
import API from "../utils/API";
import { useUserContext } from "../utils/UserContext";

function WineDetail(props) {

  const [state, dispatch] = useUserContext();
  const [wine, setWine] = useState({});
  const [vintages, setVintages] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    handleWine(id);
    handleVintages(id);
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

  //adds favorite object to favs array in db
  function addFavorite() {
    let favObj = {
      id: state.selectionId,
      recipeId: state.recipeId,
      recipeName: state.recipeName,
      recipeType: state.recipeType,
      recipeWine: state.recipeWine,
      recipeSubwine: state.recipeSubWine,
      recipeIngredients: state.recipeIngredients,
      recipeImage: state.recipeImage,
      recipeDirections: state.recipeDirections,
      wineId: wine._id,
      wineName: wine.name,
      wineType: wine.type,
      wineBlurb: wine.blurb,
      wineImage: wine.image,
      wineSubWine: wine.subwine,
      wineVintages: wine.vintages,
    };
    API.addFav({
      userId: state._id,
      favorite: favObj,
      })
      .then((res) => {
        console.log("Updated User Favorites: ", res.data);
      })
      .catch((err) => console.log(err));
  }

  //updates state.favs 
  function updatedUser() {
    API.getLatestFav(state._id)
    .then((res)=>{
      dispatch({
        type: "updateFavs",
        favs: res.data,
      });
    })
    .catch((err) => console.log(err));
  }

  //updates state selections with wine
  function updatedSelection() {
    dispatch({
      type: "updateWine",
      wineId: wine._id,
      wineName: wine.name,
      wineType: wine.type,
      wineBlurb: wine.blurb,
      wineImage: wine.image,
      wineSubWine: wine.subwine,
      wineVintages: wine.vintages,
    })
  }

  //calls multiple functions to get the updated user and state
  function handleSubmit (){
    updatedSelection();
    addFavorite();
    updatedUser();
  }


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
