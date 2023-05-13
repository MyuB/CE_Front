import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 2vh;
  background-color: #009688;
  height: 60vh;
  width: 80vw;
  margin-top: 10vh;
`;

const BarsWrapper = styled.div`
  height: 30vh;
  width: 70vw;
`;

const Circle = styled.div`
  border-radius: 50%;
  background-color: #d9d9d9;
  text-align: center;
  height: 25vh;
  width: 25vh;
  line-height: 25vh;
  font-size: 5vh;
`;

function Member() {
  return (
    <React.Fragment>
      <MainWrapper>
        <BoxWrapper>
          <BarsWrapper></BarsWrapper>
          <Circle>1</Circle>
        </BoxWrapper>
      </MainWrapper>
    </React.Fragment>
  );
}

export default Member;
