import React from "react";
import { Col, Image, Row, Stack } from "react-bootstrap";
import "./style.css";
import Group from "../../assets/Group.svg";
import Grdbtn from "../Grdbtn";
import { useTranslation } from "react-i18next";

const Banar = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <>
      <Stack>
        <Image className="opacity-50" src={Group}></Image>
        <Row className="position-absolute">
          <Col xs={12} md={5} className="left_align">
            <Row>
              <p className="heading_text">
                {t(
                  "NERD Marketplace is where NERD players will buy, Sell and rent play-to-earn NFTs."
                )}
              </p>
            </Row>
            <Row className="mb-2">
              <p className="sub_text">
                {t(
                  "NERD Marketplace is where NERD players will buy and rent play-to-earn NFTs."
                )}
              </p>
              <p className="sub_text">
                {t(
                  "NFTs used in all Nerdgames will be available on NERD Marketplace."
                )}
              </p>
            </Row>
            <Grdbtn content="Explore" />
          </Col>
        </Row>
      </Stack>
    </>
  );
};

export default Banar;
