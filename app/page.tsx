import { Container, Row, Col, Image } from "react-bootstrap";
import type { NextPage } from "next";
import TopCarousel from "@/components/Slider";
import getLangar from "@/actions/getLangar";

const Home: NextPage = async () => {
  const langars = await getLangar();
  return (
    <div className="">
      <Container fluid>
        <Row>
          <Col md={12}>
            <TopCarousel />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div>
              <h4 className="text-center my-4 fw-semibold">
                Bhandara Location
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {langars.map((item) => (
            <Col md={4} key={item.id}>
              <div className="border shadow bg-blue-50 p-3 my-3 rounded">
                <div className="flex justify-center items-center">
                  <Image
                    src={item.imgUrl}
                    alt={item.name}
                    width={400}
                    height={400}
                    className=" py-3 object-cover"
                    fluid
                  />
                </div>
                <div className="my-2">
                  <h6>
                    <span className="fw-semibold"> Bhandara Name : </span>
                    {item.name}
                  </h6>
                  <h6>
                    <span className="fw-semibold">Address :</span>{" "}
                    {item.address}, {item.district}, {item.state},{" "}
                    {item.pincode}
                  </h6>
                  <h6>
                    <span className="fw-semibold"> Timing : </span>
                    {item.time}
                  </h6>
                  <h6>
                    <span className="fw-semibold"> Roti : </span>
                    {item.roti && item.puri
                      ? "Roti, Puri"
                      : item.roti
                      ? "Roti"
                      : item.puri
                      ? "Puri"
                      : null}
                  </h6>
                  <h6>
                    <span className="fw-semibold"> Chawal : </span>
                    {item.chawal && item.biryani
                      ? "Chawal, Biryani"
                      : item.chawal
                      ? "Chawal"
                      : item.biryani
                      ? "Biryani"
                      : null}
                  </h6>
                  <h6>
                    <span className="fw-semibold">Daal : </span>
                    {item.dal && item.kadi
                      ? "Daal, Kadhi"
                      : item.dal
                      ? "Daal"
                      : item.kadi
                      ? "Kadhi"
                      : null}
                  </h6>

                  <h6>
                    <span className="fw-semibold">Sabji : </span>
                    {[
                      item.chhole && "Chhole",
                      item.kaddu && "Kaddu",
                      item.paneer && "Paneer",
                      item.gobhi && "Mix Veg",
                      item.aloo && "Aloo",
                    ]
                      .filter(Boolean)
                      .map((sabji, index, arr) =>
                        index === arr.length - 1 ? sabji : `${sabji}, `
                      )
                      .reduce((acc:any, curr) => acc + curr, "")}
                  </h6>

                  <h6>
                    <span className="fw-semibold"> Sweet : </span>
                    {item.halwa && item.kheer
                      ? "Halwa, Kheer"
                      : item.halwa
                      ? "Halwa"
                      : item.kheer
                      ? "Kheer"
                      : null}
                  </h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Home;
