import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";

const Grdbtn = ({ content }) => {
  return (
    <>
      <Button className="grdbtn">{content}</Button>
    </>
  );
};

export default Grdbtn;
