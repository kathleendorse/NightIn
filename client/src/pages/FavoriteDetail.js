import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//importing multiple components from the same file
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Butt from "../components/Butt";
import Photo from "../components/Photo";
import { useUserContext } from "../utils/UserContext";
import API from "../utils/API";


function FavoriteDetail(){

    const [state, dispatch] = useUserContext();
    const [fav, setFav] = useState({});
    const [vintages, setVintages] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [directions, setDirections] = useState([]);


    const { id } = useParams();


    //find the current favorite in state.favs
    const currentFav = findFav(id, state.favs);
    function findFav(id, arr){
        const favId = id;
        for(var i=0; i<arr.length; i++){
            if(arr[i].id === favId){
                const fav = arr[i];
                return fav;
            }
        }
    }

    useEffect(() => {
        dispatch({
            type: "setCurrentFav",
            currentFav: currentFav
        });
        setFav(currentFav);
        setVintages(currentFav.wineVintages);
        setIngredients(currentFav.recipeIngredients);
        setDirections(currentFav.recipeDirections);
      }, [currentFav, dispatch]);


    function addIngredient(ing){
      const userObj = {
        userId: state._id,
        ing: ing
      };
      console.log(ing);
      API.addIngredient(userObj)
      .then((res)=>console.log("Updated User Shopping List: ",res.data))
      .catch((err)=> console.log(err));
    }  

    function updateUser() {
      API.getLatestIng(state._id)
      .then((res)=>{
        dispatch({
          type: "addToShoppingList",
          shoppingList: res.data
        })
      })
    }

    function handleSubmit(ing){
      addIngredient(ing);
      updateUser();
    }

    
    return (
        <Container fluid>
          <Row>
            <Col size="md-10 md-offset-1">

                <Row>
                  <Link to="/favorites">
                    <Butt
                      onClick={() => {}}
                      type="success"
                      className="input-lg btn-lg"
                    >
                      ← Back
                    </Butt>
                  </Link>
                </Row>


                <Row>
                    <Col size="md-10">
                        <Photo src={fav.recipeImage} alt={fav.recipeName}></Photo>
                        <br></br>
                        <h1>{fav.recipeName}</h1>
                    </Col>
                    <Col size="md-5">
                        <h2>INGREDIENTS</h2>
                        {ingredients.length ? (
                        <List>
                            {ingredients.map((ingredient) => (
                            <ListItem key={ingredient.id}>
                              {ingredient.ing}
                              <br></br>
                              <Butt
                                type="secondary"
                                className="input-md btn-md btn-outline-secondary"
                                onClick={()=>handleSubmit(ingredient)}
                              > 
                                + Shopping List
                              </Butt>
                            </ListItem>
                            ))}
                        </List>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </Col>
                    <Col size="md-5">
                        <h2>INSTRUCTIONS</h2>
                        {directions.length ? (
                        <List>
                            {directions.map((direction) => (
                            <ListItem key={direction.id}>{direction.dir}</ListItem>
                            ))}
                        </List>
                        ) : (
                        <h3>No Results to Display</h3>
                        )}
                    </Col>
                </Row>


                <Row>
                    <Col size="md-10">
                        <Photo src={fav.wineImage} alt={fav.wineName}></Photo>
                        <br></br>
                        <h1>{fav.wineName}</h1>
                        <h4>{fav.wineBlurb}</h4>
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
      );






}

export default FavoriteDetail;