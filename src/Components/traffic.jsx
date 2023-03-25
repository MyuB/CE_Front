import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
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
    // geocode(startInput.value, "start");
    // geocode(endInput.value, "end");
    calculateRoutes();
  };

  const geocode = (address, type) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (result, status) => {
      if (status === "OK") {
        if (type === "start") {
          setStartState({
            lat: result[0].geometry.location.lat(),
            lng: result[0].geometry.location.lng(),
          });
        }
        if (type === "end") {
          setEndState({
            lat: result[0].geometry.location.lat(),
            lng: result[0].geometry.location.lng(),
          });
        }
      } else {
        console.log("Geocoding Failed");
      }
    });
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
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          center={{ lat: 37.774929, lng: -122.419416 }}
          zoom={14}
          mapContainerStyle={{ height: "25vh", width: "25vh" }}
          options={{ streetViewControl: false, mapTypeControl: false }}
          clickableIcons={false}
        ></GoogleMap>
      </LoadScript>
      {time && (
        <TrafficCarbon busTime={time.busTime} subwayTime={time.subwayTime} />
      )}
    </div>
  );
}

export default Traffic;
