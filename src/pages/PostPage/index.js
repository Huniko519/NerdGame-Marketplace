import React from 'react';
import Header from '../../components/Header/Header';
import { Col, Container, Form, Image, FormControl, Nav, Navbar, NavDropdown, Row, Dropdown, Accordion, Stack, Button } from "react-bootstrap";
import Banar from '../../components/Baner/Banar';
import SideBar from '../../components/Sidebar/Sidebar';
import TopGames from '../../components/TopGames/TopGames';
import MarketPlace from '../../components/marketplace';
import Post from '../../components/Post';
import upload from '../../assets/post-img/upload.svg'


const PostPage = () => {



    return (
        <>
            <Header />
            <Container fluid>
                <Row>
                    <Col lg="2">
                        <SideBar />
                    </Col>
                    <Col lg="10">
                        <Post />
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default PostPage
