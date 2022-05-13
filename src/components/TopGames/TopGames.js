import React from 'react';
import { useState, useEffect } from "react";
import { Col, Container, Card, Row, Button, Stack, Image } from "react-bootstrap";
import game1 from '../../assets/img2.svg';
import girl from '../../assets/girl.svg';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import bac from '../../assets/btn.svg'
import frame from '../../assets/frame.svg'
import eth from '../../assets/eth.svg';
// import place-a-bit-txt from '../../assets/text.svg';
// import './TopGames.css';
import './TopGames.css';
import GameIcon1 from '../../assets/gameImg1.svg';
import GameIcon2 from '../../assets/gameImg2.svg';
import tempData from '../../tempData/tempData';
import CarouselComponent from '../Carousel/Carousel';

const TopGames = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const n = 10;
    const gameName=['Top NFT’s','NFT’s for Sale','NFT’s for Rent']

    const [temp, setTemp] = useState([])
    useEffect(() => {
        setTemp(tempData);
        console.log('temp data---------------', tempData)
    })

    return (
        <>
            <Container fluid className='top-game'>
                <p className='top-game-title'>{gameName[0]}</p>
                <Row className='back'>
                    <Col>
                       <CarouselComponent/>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='top-game'>
                <p className='top-game-title'>{gameName[1]} </p>
                <Row className='back'>
                    <Col>
                      <CarouselComponent/>
                    </Col>
                </Row>

            </Container>

            <Container fluid className='top-game'>
                <p className='top-game-title'>{gameName[2]} </p>
                <Row className='back'>
                    <Col>
                       <CarouselComponent/>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default TopGames
