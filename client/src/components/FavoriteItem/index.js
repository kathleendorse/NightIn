import React from "react";

//import { Col, Row, Container } from "./../Grid";
import { Row, Col } from "./../Grid";
import Cord from "../Cord";
import { Link } from "react-router-dom";
import Butt from "../Butt";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function FavoriteItem({
  id,
  recipeName,
  recipeImage,
  wineName,
  wineImage,
  onClick,
}) {


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <Row className="justify-content-center">
      <Col size="md-12 sm-12" className="justify-content-center">
        <Carousel responsive={responsive}>
          <Cord image={recipeImage} name={recipeName} />
          <Cord image={wineImage} name={wineName} />
          <div className = "center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to={"/favorites/" + id}>        
              <Butt
                type="secondary"
                className="input-md btn-md btn-outline-secondary"
                onClick={() => {}}
              >
                View details
              </Butt>
              <br></br>
            </Link>
            <Butt
              type="secondary"
              className="input-md btn-md btn-outline-secondary"
              onClick={onClick}
            >
              Delete
            </Butt>
            <br></br>
          </div>
        </Carousel>
      </Col>
    </Row>
  );
}

export default FavoriteItem;
