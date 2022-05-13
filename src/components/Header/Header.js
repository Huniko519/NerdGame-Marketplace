import React from 'react';
import { Col, Container, Form, Image, FormControl, Nav, Navbar, NavDropdown, Row, Dropdown, Accordion, Stack, Button } from "react-bootstrap";
import Nerdgames from '../../assets/Nerdgames.svg';
import userAvatar from '../../assets/Ellipse.png'

import './Header.css';


const Header = () => {

    return (
        <>
            <Navbar bg="" className='navbar_bg' expand="lg">
                <Container fluid>
                    {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
                    {/* <Container> */}
                    <Navbar.Brand href="#home">
                        <img
                            // src="/logo.svg"
                            src={Nerdgames}
                            width="93px"
                            height="54px"
                            // className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    {/* </Container> */}
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Form className="d-flex">
                                <FormControl
                                    
                                    type="search"
                                    placeholder="Search"
                                    className="search_bar"
                                    aria-label="Search"
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                            </Form>
                            {/* <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form> */}
                        <Button className='connect_wallet_btn'>Connect Wallet</Button>
                        {/* <Button variant="primary">Primary</Button> */}
                        <Image src={userAvatar} className="avatar_pading" roundedCircle />
                        <NavDropdown className='user_name' title="Victor Glain" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sample</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header
