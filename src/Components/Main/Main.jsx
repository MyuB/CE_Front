import { getMainPageInfo } from "API/main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { months } from "utils/months";
import { useState, useEffect } from "react";

const MainWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: stretch;
  flex-direction: column;
  margin-top: 10vh;
`;

const GroupBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5vh;
  height: 60vh;
`;

const GroupBox = styled.div`
  height: 11vh;
  width: 75vw;
  line-height: 11vh;
  font-size: 3vh;
  font-weight: 500;
  text-align: center;
  color: black;
  border: 0.3lvh solid #edeff7;
  border-radius: 1vh;
`;

const Comment = styled.div`
  color: black;
  font-weight: 700;
  font-size: 3vh;
  line-height: 5vh;
  margin-left: 4vh;
`;

const CurrentDate = styled.div`
  color: #92b8b1;
  font-size: 2.5vh;
  margin-left: 4vh;
`;

const TopBox = styled.div`
  height: 11vh;
  width: 75vw;
  line-height: 11vh;
  font-size: 3vh;
  font-weight: 500;
  text-align: center;
  color: black;
  border: 0.3lvh solid #edeff7;
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CarbonMent = styled.span`
  font-size: 2vh;
  margin-bottom: 0.5vh;
  height: 2vh;
`;

const CarbonUsage = styled.span`
  font-size: 3.5vh;
  color: #009688;
  text-align: center;
  font-weight: bold;
`;

function Main() {
  const navigate = useNavigate();
  const [infos, setInfos] = useState();
  useEffect(() => {
    getMainPageInfo().then((res) => setInfos(res));
  }, []);

  const goToTraffic = () => {
    navigate("/traffic");
  };
  const goToFood = () => {
    navigate("/food");
  };
  const goToGroup = () => {
    navigate("/group");
  };

  const getDate = () => {
    let now = new Date();
    let todayDate = now.getDate();
    const week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const curMonth = months[now.getMonth()].name;
    let dayOfWeek = week[now.getDay()];

    return dayOfWeek + ", " + todayDate + " " + curMonth;
  };

  return (
    <MainWrapper>
      <Comment>Hi, {infos ? infos.name : "123"}</Comment>
      <CurrentDate>{getDate()}</CurrentDate>
      <GroupBoxWrapper>
        <TopBox>
          <CarbonMent>{"탄소 소비량"}</CarbonMent>
          <CarbonUsage>{infos ? infos.total_carbon : "123"} C/kwh</CarbonUsage>
        </TopBox>
        <GroupBox onClick={goToTraffic}>{"교통 입력"}</GroupBox>
        <GroupBox onClick={goToFood}>{"음식 입력"}</GroupBox>
        <GroupBox onClick={goToGroup}>{"그룹"}</GroupBox>
      </GroupBoxWrapper>
    </MainWrapper>
  );
}

export default Main;
