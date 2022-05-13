import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Stack,
  Form,
  Dropdown,
} from "react-bootstrap";
import upload from "../../assets/post-img/upload.svg";
import "./style.css";
import eth from "../../assets/post-img/group.svg";
import Grdbtn from "../Grdbtn";

const Post = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} className="mt-5">
          <p className="post-header">Add NFT to Nerdgames Marketplace</p>
          <p className="post-type"> Image, Video, Audio, or 3D Model</p>
          <p className="post-title">
            {" "}
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
          <Image className="upload-post" src={upload} />
          <Stack>
            <p className="post-input-name">Name</p>
            <input className="input-name" type="text" placeholder="" />
          </Stack>
          <Stack>
            <p className="post-input-name mt-3">External link</p>
            <input className="input-name" type="text" placeholder="" />
          </Stack>
          <Stack>
            <Form.Label className="post-input-name mt-3">
              Description
            </Form.Label>
            <Form
              className="post-textarea mt-2"
              as="textarea"
              placeholder="Please discribe detail discription of your Item"
              rows={3}
            />
          </Stack>
          <Stack>
            <Form.Label className="post-input-name mt-3">Supply</Form.Label>
            <input className="input-name mt-2" type="text" rows={3} />
          </Stack>
          <Stack>
            <Form.Label className="post-input-name mt-3">Blaticon</Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                className="post-dropdown mt-2"
                style={{
                  display: "flex",
                  backgroundColor: "#2E2C38",
                  border: "none",
                }}
              >
                <Stack direction="horizontal" gap={2}>
                  <Image className="ethereum-img" src={eth} />
                  <span className="post-input-name">Ethereum</span>
                </Stack>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Stack>
          <div className="py-3 btn-col mb-5">
            <Grdbtn content={"Create"} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
