import { Container, Row, Col } from "react-bootstrap";
import type { NextPage } from 'next';
import TopCarousel from "@/components/Slider";
 

const Home: NextPage = () => {
  return (
    <div className="">
    <Container fluid>
      <Row>
        <Col md={12}>
        <TopCarousel />
        </Col>
    </Row>
  </Container>
</div>
  );
};
export default Home;
