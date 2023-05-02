import styled from "styled-components";
import { LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import "./traffic.scss";
import calculateTime from "./calculateTime";
import TrafficCarbon from "./trafficCarbon";
import { useNavigate } from "react-router-dom";
import Line from "assets/Line.png";

const InputForm = styled.input`
  width: 80vw;
  height: 5vh;
  display: block;
  border: 1px solid black;
  border-radius: 1vh;
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

const Address = styled.div`
  font-size: 2.5vh;
  color: black;
  font-weight: bold;
  margin: 10vw 0 3vw 7vw;
`;

const CalcedBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalcedResultBox = styled.div`
  height: 7vh;
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const CalcedBoxImageWrapper = styled.div`
  height: 5vh;
  width: 5vh;
  background-color: rgba(146, 184, 177, 0.6);
  border-radius: 2vw;
`;

const CalcedBoxMessageWrapper = styled.div`
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
  width: 55vw;
`;

const CalcedBoxMessage = styled.div`
  font-size: 2vh;
  line-height: 2vh;
  color: black;
  font-weight: bold;
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
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      ></LoadScript>
      <CarbonCalced>
        {time ? (
          <TrafficCarbon busTime={time.busTime} subwayTime={time.subwayTime} />
        ) : (
          0
        )}{" "}
        C / kwh
      </CarbonCalced>
      <CarbonUsed>{"carbon used"}</CarbonUsed>
      <img src={Line} alt="" className={"line-image"} />
      <Address>주소</Address>
      <div className={"input-wrapper"}>
        <div className={"text-wrapper"}>
          <InputForm id="start" placeholder="출발지를 입력해주세요" required />
        </div>
        <div className={"text-wrapper"}>
          <InputForm id="end" placeholder="도착지를 입력해주세요" required />
        </div>
      </div>
      <CalcedBoxesWrapper>
        <CalcedResultBox>
          <CalcedBoxImageWrapper id={"123"}>
            {/* 여기 안에 픽토그램 들어갈 것 */}
          </CalcedBoxImageWrapper>
          <CalcedBoxMessageWrapper>
            <CalcedBoxMessage>도보 이용 시</CalcedBoxMessage>
            <CalcedBoxMessage style={{ color: "#009688" }}>
              0 C/kwh
            </CalcedBoxMessage>
          </CalcedBoxMessageWrapper>
        </CalcedResultBox>
        <CalcedResultBox>
          <CalcedBoxImageWrapper>
            {/* 여기 안에 픽토그램 들어갈 것 */}
          </CalcedBoxImageWrapper>
          <CalcedBoxMessageWrapper>
            <CalcedBoxMessage>자가용 이용 시</CalcedBoxMessage>
            <CalcedBoxMessage style={{ color: "#009688" }}>
              {/* 계산 결과 */ "C/kwh"}
            </CalcedBoxMessage>
          </CalcedBoxMessageWrapper>
        </CalcedResultBox>
      </CalcedBoxesWrapper>
      <div className="button-wrapper">
        <ConfirmBtn onClick={setValues}>계산</ConfirmBtn>
        <ConfirmBtn onClick={moveToSolution}>솔루션</ConfirmBtn>
      </div>
    </div>
  );
}

export default Traffic;
