import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import tempData from "../../tempData/tempData";
import Nftcard from "../Nftcard";

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel className="carasoul" responsive={responsive}>
        {tempData.map((gameDetails, i) => (
          <Nftcard key={i} contents={gameDetails} />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselComponent;
