import React from 'react';
import Header from '../../components/Header/Header';
import { Col, Container, Form, Image, FormControl, Nav, Navbar, NavDropdown, Row, Dropdown, Accordion, Stack, Button } from "react-bootstrap";
import Banar from '../../components/Baner/Banar';
import './Home.css';
import SideBar from '../../components/Sidebar/Sidebar';
import TopGames from '../../components/TopGames/TopGames';
import MarketPlace from '../../components/marketplace';


const Home = () => {

    const toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
      };
    
    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col lg="2">
                        {/* <Sidebar/> */}
                        <SideBar/>
                    </Col>
                    <Col lg="10" >
                        <Banar/>
                        {/* <MarketPlace/> */}
                            <TopGames/>
                    </Col>
                </Row>
               
            </Container>
        </>
    )
}

export default Home
