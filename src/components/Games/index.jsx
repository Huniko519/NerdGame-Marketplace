import React from "react";
import { useState, useEffect } from "react";
import {
  Col,
  Container,
  Card,
  Row,
  Button,
  Stack,
  Image,
} from "react-bootstrap";
import game1 from "../../assets/img2.svg";
import girl from "../../assets/girl.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bac from "../../assets/btn.svg";
import frame from "../../assets/frame.svg";
import eth from "../../assets/eth.svg";
// import place-a-bit-txt from '../../assets/text.svg';
// import './TopGames.css';
import { useNavigate } from "react-router-dom";
import "../TopGames/TopGames.css";
import GameIcon1 from "../../assets/gameImg1.svg";
import GameIcon2 from "../../assets/gameImg2.svg";
import tempData from "../../tempData/tempData";

const Game = () => {
  const n = 10;

  const [temp, setTemp] = useState([]);
  useEffect(() => {
    setTemp(tempData);
    console.log("temp data---------------", tempData);
  });

  const navigate = useNavigate();
  const app = () => {
    navigate("/market");
  };

  return (
    <>
      {/* {[...Array(temp)].map((elementInArray, index) => ( */}
      {temp.map((gameDetails, i) => {
        {
          console.log("gamedetails", gameDetails.gameImg);
        }
        return (
          <Card
            onClick={app}
            key={i}
            className="cards"
            style={{ backgroundColor: "#33313E" }}
          >
            <div style={{ position: "relative" }}>
              <Image className="image" src={gameDetails.gameImg} />
              <div className="place-a-bid-align">
                <button className="cen txt">
                  {/* place a bid */}
                  {gameDetails.place_bid}
                </button>
              </div>
            </div>
            <Row className="card_text_top">
              <Col>
                <Image className="avatar" src={gameDetails.usrAvatar} />
              </Col>
              <Col>
                <Card.Text className="title">{gameDetails.msg}</Card.Text>
                <Card.Text className="users">{gameDetails.UserName}</Card.Text>
              </Col>
            </Row>
            <Row className="ether_card_text_top">
              <Col>
                <Row>
                  <Col xs={4}>
                    <Image className="" src={eth} />
                  </Col>
                  <Col xs={8}>
                    <p className="ether_align">{gameDetails.Amount}</p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <p className="ether_time_duration">{gameDetails.time}</p>
              </Col>
            </Row>
          </Card>
        );
      })}
      {/* ))} */}
    </>
  );
};

export default Game;
