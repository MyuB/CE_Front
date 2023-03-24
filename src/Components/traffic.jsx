import styled from "styled-components";
import {
  GoogleMap,
  DirectionsService,
  LoadScript,
} from "@react-google-maps/api";
import { useState } from "react";
import "./traffic.scss";

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
  const [start, setStartState] = useState("");
  const [end, setEndState] = useState("");
  const [directions, setDirections] = useState(null);

  const directionsCallback = (result) => {
    if (result !== null) {
      setDirections(result);
    }
  };

  const setValues = () => {
    const inputs = document.querySelectorAll("input");
    setStartState(inputs[0].value);
    setEndState(inputs[1].value);
    console.log(start, end);
  };

  return (
    <div>
      <div className={"input-wrapper"}>
        <div className={"text-wrapper"}>
          <span>출발지</span>
          <InputForm />
        </div>
        <div className={"text-wrapper"}>
          <span>도착지</span>
          <InputForm />
        </div>
        <ConfirmBtn onClick={setValues}>알아보기</ConfirmBtn>
      </div>
      {/* <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
        <GoogleMap
          center={{ lat: 37.774929, lng: -122.419416 }}
          zoom={14}
          mapContainerStyle={{ height: "25vh", width: "25vh" }}
          options={{ streetViewControl: false, mapTypeControl: false }}
          clickableIcons={false}
        >
          <DirectionsService
            options={{
              origin: { lat: 37.774929, lng: -122.419416 },
              destination: { lat: 37.774929, lng: -122.519416 },
              travelMode: "DRIVING",
            }}
            callback={directionsCallback}
          />
        </GoogleMap>
      </LoadScript> */}
    </div>
  );
}

export default Traffic;
