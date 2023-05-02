import styled from "styled-components";
import { LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import "./traffic.scss";
import calculateTime from "./calculateTime";
import TrafficCarbon from "./trafficCarbon";
import { useNavigate } from "react-router-dom";
import Line from "assets/Line.png";

const InputForm = styled.input`
  width: 55vw;
  height: 3vh;
  display: block;
  border: 1px solid black;
`;

const ConfirmBtn = styled.div`
  width: 20vh;
  height: 8vh;
  text-align: center;
  line-height: 8vh;
  font-size: 3vh;
  border-radius: 10px;
  background-color: #009688;
  color: white;
  margin-bottom: 5vh;
`;

const CarbonBox = styled.div`
  padding: 1vh;
  height: 35vh;
  width: 35vh;
  background-color: rgb(0, 150, 136);
  margin: 0 auto;
  color: white;
  font-size: 10vw;
  text-align: center;
  border-radius: 10%;
`;

const CarbonText = styled.div`
  text-align: center;
  font-size: 8vw;
  margin-top: 3vh;
  margin-bottom: 7.5vh;
`;

const CarbonCalced = styled.div`
  text-align: center;
  font-size: 2.5vh;
  font-weight: bold;
  color: #009688;
`;

const CarbonUsed = styled.div`
  text-align: center;
  font-size: 2vh;
  color: rgba(0, 150, 136, 0.7);
`;

function Traffic() {
  const navigate = useNavigate();

  const [start, setStartState] = useState(null);
  const [end, setEndState] = useState(null);
  const [time, setTime] = useState(null);

  const moveToSolution = () => {
    navigate("/trafficsol");
  };

  const calculateRoutes = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.TRANSIT,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          const transitRoute = result.routes[0].legs[0].steps.filter(
            (step) => step.travel_mode !== "WALKING"
          );
          setTime(calculateTime(transitRoute));
        } else {
          console.log(status);
        }
      }
    );
  };

  const setValues = () => {
    const startInput = document.querySelector("#start");
    const endInput = document.querySelector("#end");
    setStartState(startInput.value);
    setEndState(endInput.value);
    calculateRoutes();
  };

  return (
    <div className={"traffic-wrapper"}>
      <CarbonCalced>
        {time ? (
          <TrafficCarbon busTime={time.busTime} subwayTime={time.subwayTime} />
        ) : (
          0
        )}{" "}
        C / kwh
      </CarbonCalced>
      <CarbonUsed>{"carbon used"}</CarbonUsed>
      <img src={Line} alt="" />
      <div className={"input-wrapper"}>
        <div className={"text-wrapper"}>
          <InputForm
            id="start"
            placeholder="출발지를 입력해주세요"
            type={"text"}
            required
          />
        </div>
        <div className={"text-wrapper"}>
          <InputForm
            id="end"
            placeholder="도착지를 입력해주세요"
            type={"text"}
            required
          />
        </div>
      </div>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      ></LoadScript>
      <CarbonBox>
        <CarbonText>{"이동하는데 소비된 탄소 소비량"}</CarbonText>
        {time ? (
          <TrafficCarbon busTime={time.busTime} subwayTime={time.subwayTime} />
        ) : (
          0
        )}{" "}
        C / kwh
      </CarbonBox>

      <div className="button-wrapper">
        <ConfirmBtn onClick={setValues}>계산</ConfirmBtn>
        <ConfirmBtn onClick={moveToSolution}>솔루션</ConfirmBtn>
      </div>
    </div>
  );
}

export default Traffic;
