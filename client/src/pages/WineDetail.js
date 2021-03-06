import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Butt from "../components/Butt";
//import Photo from "../components/Photo";
import API from "../utils/API";
import { useUserContext } from "../utils/UserContext";
import Cord from "../components/Cord";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function WineDetail() {
  const [state, dispatch] = useUserContext();
  const [wine, setWine] = useState({});
  const [vintages, setVintages] = useState([]);

  const { id } = useParams();

  useEffect(() => {

//    handleWine(id);
//    handleVintages(id);

  API.getWine(id)
    .then((res) => {
      setWine(res.data)
      setVintages(res.data.vintages)
    })
    .catch((err) => console.log(err));



    
    //checks local storage to update state if state is empty
    let storageStatusId = JSON.parse(localStorage.getItem("_id"));
    let storageStatusEmail = JSON.parse(localStorage.getItem("email"));
    let storageStatusFavs = JSON.parse(localStorage.getItem("favs"));
    let storageStatusShoppingList = JSON.parse(localStorage.getItem("shoppingList"));
    if (state._id === "" && storageStatusId){
      dispatch({
        type: "setCurrentUser",
        email: storageStatusEmail,
        _id: storageStatusId,
        favs: storageStatusFavs,
        shoppingList: storageStatusShoppingList,
      });
    } else {
      return;
    }

  }, [id, state._id, dispatch]);

  // function handleWine(id) {
  //   API.getWine(id)
  //     .then((res) => setWine(res.data))
  //     .catch((err) => console.log(err));
  // }

  // function handleVintages(id) {
  //   API.getWine(id)
  //     .then((res) => setVintages(res.data.vintages))
  //     .catch((err) => console.log(err));
  // }

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
      recipeImageMobile: state.recipeImageMobile,
      recipeThumb: state.recipeThumb,
      recipeDirections: state.recipeDirections,
      wineId: wine._id,
      wineName: wine.name,
      wineType: wine.type,
      wineBlurb: wine.blurb,
      wineImage: wine.image,
      wineImageMobile: wine.imageMobile,
      wineThumb: wine.thumb,
      wineSubWine: wine.subwine,
      wineVintages: wine.vintages,
    };


    API.addFav({
      userId: state._id,
      favorite: favObj,
    })
      .then((res) => {
        console.log("Updated User Favorites: ", res.data);

        dispatch({
          type: "clearSelections",
          selectionId: "",
          recipeId: "",
          recipeName: "",
          recipeType: "",
          recipeImage: "",
          recipeImageMobile: "",
          recipeWine: "",
          recipeSubWine: "",
          recipeIngredients: "",
          recipeDirections: "",
          wineId: "",
          wineName: "",
          wineType: "",
          wineBlurb: "",
          wineImage: "",
          wineImageMobile: "",
          wineThumb: "",
          wineVintages: "",
        });
      })
      .catch((err) => console.log(err));
  }




  //updates state.favs
  function updatedUser() {
    API.getLatestFav(state._id)
      .then((res) => {
        dispatch({
          type: "updateFavs",
          favs: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  //calls multiple functions to add the favorite and get the updated user and state
  function handleSubmit() {
    addFavorite();
    updatedUser();
  }


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <br></br>
            <h2 className="text-center">{wine.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <Row>
              <Link to="/wine">
                <Butt
                  onClick={() => {}}
                  type="secondary"
                  className="input-md btn-md btn-outline-secondary"
                >
                  ← Back
                </Butt>
              </Link>
              <Link to="/favorites">
                <Butt
                  onClick={handleSubmit}
                  type="secondary"
                  className="input-md btn-md btn-outline-secondary"
                >
                  + Add to Favorites
                </Butt>
              </Link>
            </Row>
            <Row>
              <Col size="md-12">
                {/* <Photo src={wine.image} alt={wine.name}></Photo> */}
              </Col>
            </Row>

            <Row>
              <Col size="md-10">
                <p>{wine.blurb}</p>
              </Col>
            </Row>

            <Row>
              <Col size="md-12 sm-12">
                <h4 className="text-center">VINTAGES</h4>
              </Col>
            </Row>
            <Row>
              <Col size="md-12 sm-12">
              <Container className="justify-content-center">
                {vintages.length ? (
                  <Carousel responsive={responsive}>
                    {vintages.map((vintage) => (
                      <div key={vintage.id}>
                        <Cord name={vintage.vin} image={vintage.img} />
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <p>No Results to Display</p>
                )}
                </Container>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

  );
}

export default WineDetail;
