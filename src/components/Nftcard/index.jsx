import React from "react";
import { Col, Card, Row, Image } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import eth from "../../assets/eth.svg";
import "./style.css";

const Nftcard = ({ contents }) => {
  return (
    <>
      <Card className="cards" style={{ backgroundColor: "#33313E" }}>
        <div style={{ position: "relative" }}>
          <Image className="image" src={contents.gameImg} />
          <div className="place-a-bid-align">
            <button className="cen txt">{contents.place_bid}</button>
          </div>
        </div>
        <Row className="card_text_top">
          <Col>
            <Image className="avatar" src={contents.usrAvatar} />
          </Col>
          <Col>
            <Card.Text className="title">{contents.msg}</Card.Text>
            <Card.Text className="users">{contents.UserName}</Card.Text>
          </Col>
        </Row>
        <Row className="ether_card_text_top">
          <Col>
            <Row>
              <Col xs={4}>
                <Image className="" src={eth} />
              </Col>
              <Col xs={8}>
                <p className="ether_align">{contents.Amount}</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <p className="ether_time_duration">{contents.time}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default Nftcard;
