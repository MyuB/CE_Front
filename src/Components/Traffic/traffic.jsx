import styled from "styled-components";
import { LoadScript } from "@react-google-maps/api";
import { useState } from "react";
import "./traffic.scss";
import calculateTime from "./calculateTime";
import TrafficCarbon from "./trafficCarbon";
import { useNavigate } from "react-router-dom";
import Line from "assets/Line.png";
import { setTrafficCarbon } from "API/traffic";

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
  font-size: 2vh;
  font-weight: bold;
  border-radius: 10px;
  background-color: #92b8b1;
  color: white;
  margin-bottom: 5vh;
`;

const CarbonUsed = styled.div`
  text-align: center;
  font-size: 3.5vh;
  font-weight: bold;
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
  const [time, setTime] = useState(null);
  const [inputs, setInputs] = useState({
    start: "",
    end: "",
  });

  const moveToSolution = () => {
    navigate("/trafficsol");
  };

  const calculateRoutes = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: inputs.start,
        destination: inputs.end,
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

    resetInputValues();
  };

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetInputValues = () => {
    setInputs({
      start: "",
      end: "",
    });
  };

  return (
    <div className={"traffic-wrapper"}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      ></LoadScript>
      {/* <CarbonCalced>
        {time ? (
          <TrafficCarbon busTime={time.busTime} subwayTime={time.subwayTime} />
        ) : (
          0
        )}{" "}
        C / kwh
      </CarbonCalced>*/}
      <CarbonUsed>{"carbon used"}</CarbonUsed>
      <img src={Line} alt="" className={"line-image"} />
      <Address>주소</Address>
      <div className={"input-wrapper"}>
        <div className={"text-wrapper"}>
          <InputForm
            id="start"
            placeholder="출발지를 입력해주세요"
            required
            name="start"
            onChange={onChange}
          />
        </div>
        <div className={"text-wrapper"}>
          <InputForm
            id="end"
            placeholder="도착지를 입력해주세요"
            required
            name="end"
            onChange={onChange}
          />
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
          <CalcedBoxImageWrapper id={"123"}>
            {/* 여기 안에 픽토그램 들어갈 것 */}
          </CalcedBoxImageWrapper>
          <CalcedBoxMessageWrapper>
            <CalcedBoxMessage>대중교통 이용 시</CalcedBoxMessage>
            <CalcedBoxMessage style={{ color: "#009688" }}>
              {time ? (
                <TrafficCarbon
                  busTime={time.busTime}
                  subwayTime={time.subwayTime}
                  traffic={true}
                />
              ) : (
                0
              )}{" "}
              C/kwh
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
              {time ? (
                <TrafficCarbon
                  busTime={time.busTime}
                  subwayTime={time.subwayTime}
                  traffic={false}
                />
              ) : (
                0
              )}{" "}
              {"C/kwh"}
            </CalcedBoxMessage>
          </CalcedBoxMessageWrapper>
        </CalcedResultBox>
      </CalcedBoxesWrapper>
      <div className="click-wrapper">
        <ConfirmBtn onClick={calculateRoutes}>계산</ConfirmBtn>
        <ConfirmBtn onClick={moveToSolution}>솔루션</ConfirmBtn>
      </div>
    </div>
  );
}

export default Traffic;
