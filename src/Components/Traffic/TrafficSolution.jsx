import { getTrafficSolution } from "API/traffic";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SolutionBox = styled.div`
  width: 40vh;
  height: 70vh;
  border: 0.3lvh solid #edeff7;
  border-radius: 3vh;
  text-align: center;
  margin: 5vh auto;
  padding-top: 9vh;
  font-size: 3vh;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`;

function TrafficSolution() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    getTrafficSolution().then((res) => {
      setSolution(res.data.solution);
      console.log(res.data);
    });
  }, []);

  return (
    <Wrapper>
      <SolutionBox>{solution ? solution : "solution not ready"}</SolutionBox>
    </Wrapper>
  );
}

export default TrafficSolution;
