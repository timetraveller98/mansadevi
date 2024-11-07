'use client'
import { Langar } from "@prisma/client";
import { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import DistrictState from "@/app/utils/state.json";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
interface LangarProps {
    langars : Langar[] 
}
const Details:React.FC<LangarProps> = ({langars}) => {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const filteredDoctors = langars.filter((langar: any) => {
    const matchesState = state ? langar.state === state : true;
    const matchesDistrict = district ? langar.district === district : true;

    return  matchesState && matchesDistrict;
  });

  const handleState = (event: any) => {
    setState(event.target.value);
  };

  const handleDistrict = (event: any) => {
    setDistrict(event.target.value);
  };
    return ( 
      <div>
      <Container>
      <Row>
      <Col xs={6}>
          <FormControl
            fullWidth
            className="m-1 my-3"
            required
            variant="outlined"
          >
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state-select"
              value={state}
              label="State"
              required
              onChange={handleState}
            >
              {DistrictState.map((item: any) => (
                <MenuItem value={item.state} key={item.state}>
                  {item.state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Col>
        <Col xs={6}>
          <FormControl
            fullWidth
            className="m-1 my-3"
            disabled={!state}
            variant="outlined"
            required
          >
            <InputLabel id="district-label">District</InputLabel>
            <Select
              labelId="district-label"
              id="district-select"
              value={district}
              label="District"
              required
              onChange={handleDistrict}
            >
              {DistrictState.filter((item) => item.state === state).map(
                (item) =>
                  item.districts.map((data) => (
                    <MenuItem value={data} key={data}>
                      {data}
                    </MenuItem>
                  ))
              )}
            </Select>
          </FormControl>
        </Col>
      </Row>
    </Container>
        <Container>
        <Row>
          {filteredDoctors.map((item) => (
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
}
 
export default Details;