import { Container, Row, Col } from "react-bootstrap";
import type { NextPage } from 'next';
 

const Home: NextPage = () => {
  return (
    <div className="">
    <Container >
      <Row>
        <Col md={12}>
        <h1>Home Page</h1>
        </Col>
    </Row>
  </Container>
</div>
  );
};
export default Home;
