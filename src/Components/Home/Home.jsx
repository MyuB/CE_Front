import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40vh;
  width: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 60vh auto 0 auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const MainButton = styled.div`
  background-color: #009688;
  color: white;
  font-size: 4vh;
  width: 25vh;
  height: 12vh;
  text-align: center;
  line-height: 12vh;
  margin-bottom: 5vh;
  border-radius: 10px;
`;

function Home() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <MainWrapper>
      <LogoWrapper></LogoWrapper>
      <ButtonsWrapper>
        <MainButton onClick={goToLogin}>{"로그인"}</MainButton>
        <MainButton onClick={goToRegister}>{"회원가입"}</MainButton>
      </ButtonsWrapper>
    </MainWrapper>
  );
}

export default Home;
