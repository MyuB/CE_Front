import React, { useState } from "react";
import styled from "styled-components";
import "./Food.scss";
import cam from "../../assets/camera.png";
import { useNavigate } from "react-router-dom";
import { getFoodCarbonData, setFoodCarbonData } from "API/food";
import { getPrediction } from "API/ml";

const MainWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SmallText = styled.div`
  height: 8vh;
  font-size: 1.8vh;
  line-height: 8vh;
  text-align: center;
  font-weight: bold;
`;

const Camera = styled.img`
  width: 20vh;
  height: 20vh;
  display: block;
`;

const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const NavyText = styled.div`
  height: 3vh;
  line-height: 3vh;
  font-size: 3vh;
  color: rgba(6, 25, 65, 0.8);
  font-weight: bold;
`;

const GreenText = styled.div`
  height: 4vh;
  line-height: 4vh;
  font-size: 4vh;
  color: #009688;
  font-weight: bold;
`;

const SolutionButton = styled.div`
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

function Food() {
  const navigate = useNavigate();
  const [foodCarbon, setFoodCarbon] = useState(0);
  const [prediction, setPrediction] = useState("");

  const onFileChange = (event) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("img", file);

    getPrediction(formData).then((res) => {
      setPrediction(res);
      getFoodCarbonData(res).then((res) => {
        setFoodCarbon(res.data);
      });
    });
  };

  const goToSolution = () => {
    setFoodCarbonData(foodCarbon).then((res) => {
      console.log(res);
    });
    navigate("/foodSolution");
  };

  return (
    <React.Fragment>
      <MainWrapper>
        <SmallText>
          {"이미지 처리 AI를 이용해 음식 탄소량을 계산해보세요"}
        </SmallText>
        <label htmlFor="image" className="image-label">
          <input
            type="file"
            id="image"
            onChange={onFileChange}
            style={{ display: "none" }}
          />
          <Camera src={cam} alt="camera" />
        </label>
        <TextWrapper>
          <NavyText>{"탄소소비량"}</NavyText>
          <GreenText>
            {foodCarbon}
            {" g/kwh"}
          </GreenText>
          <NavyText style={{ marginTop: "1vh" }}>{"내가 먹은 음식"}</NavyText>
          <GreenText>{prediction ? prediction : ""}</GreenText>
        </TextWrapper>
        <SolutionButton onClick={goToSolution}>{"솔루션 보기"}</SolutionButton>
      </MainWrapper>
    </React.Fragment>
  );
}

export default Food;
