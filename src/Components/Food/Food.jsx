import React from "react";
import styled from "styled-components";
import "./Food.scss";
import cam from "../../assets/camera.png";

const MainWrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImageButton = styled.input`
  border: none;
  border-radius: 100%;
  height: 35vh;
  width: 35vh;
  background-color: red;
`;

const SmallText = styled.div`
  height: 8vh;
  font-size: 1.8vh;
  line-height: 8vh;
  text-align: center;
  font-weight: bold;
`;

const ImageLabel = styled.label`
  border: none;
  border-radius: 100%;
  height: 35vh;
  width: 35vh;
  background-color: #92b8b1;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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

function Food() {
  return (
    <React.Fragment>
      <MainWrapper>
        <SmallText>
          {"이미지 처리 AI를 이용해 음식 탄소량을 계산해보세요"}
        </SmallText>
        <ImageButton type="file" id={"image"} />
        <ImageLabel htmlFor="image" className={"image-label"}>
          <Camera src={cam} alt="camera" />
        </ImageLabel>
      </MainWrapper>
    </React.Fragment>
  );
}

export default Food;
