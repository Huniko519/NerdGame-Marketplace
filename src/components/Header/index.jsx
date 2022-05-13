import React from "react";
import {
  Container,
  Form,
  Image,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Grdbtn from "../Grdbtn";
import "./style.css";
import Nerdgames from "../../assets/Nerdgames.svg";
import userAvatar from "../../assets/Ellipse.png";
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t } = useTranslation(["translation"]);
  return (
    <>
      <Navbar bg="" className="navbar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={Nerdgames}
                width="93px"
                height="54px"
                alt={t("NerdGame")}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder={t("Search")}
                  className="searchbar"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Grdbtn content={t("Connect Wallet")} />
            <Image src={userAvatar} className="avatarpading" roundedCircle />
            <NavDropdown
              className="username"
              title={t("Victor Glain")}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item>{t("Logout")}</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
