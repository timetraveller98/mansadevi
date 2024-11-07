"use client";
import { Container, Row, Col } from "react-bootstrap";
import LangarForm from "./Form";
const Upload = () => {
  return (
    <div className="">
      <Container>
        <Row>
          <Col md={6}>
            <h1>Upload Page</h1>
          </Col>
          <Col md={6}>
           <LangarForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Upload;
