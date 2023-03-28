import styled from "styled-components";
import { LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import "./traffic.scss";
import calculateTime from "./calculateTime";
import TrafficCarbon from "./trafficCarbon";

const InputForm = styled.input`
  width: 40vw;
  height: 3vh;
`;

const ConfirmBtn = styled.div`
  width: 15vh;
  height: 4vh;
  border: 1px solid black;
  text-align: center;
  line-height: 4vh;
  border-radius: 10px;
`;

function Traffic() {
  const [start, setStartState] = useState(null);
  const [end, setEndState] = useState(null);
  const [time, setTime] = useState(null);

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
    <div>
      <div className={"input-wrapper"}>
        <div className={"text-wrapper"}>
          <span>출발지</span>
          <InputForm id="start" placeholder="출발지" type={"text"} required />
        </div>
        <div className={"text-wrapper"}>
          <span>도착지</span>
          <InputForm id="end" placeholder="도착지" type={"text"} required />
        </div>
        <ConfirmBtn onClick={setValues}>알아보기</ConfirmBtn>
      </div>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      ></LoadScript>
      {time && (
        <TrafficCarbon busTime={time.busTime} subwayTime={time.subwayTime} />
      )}
    </div>
  );
}

export default Traffic;
