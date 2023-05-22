import styled from "styled-components";
import { useState } from "react";

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
  line-height: 70vh;
`;

function FoodSolution() {
  const [solution, setSolution] = useState();

  return (
    <Wrapper>
      <SolutionBox>
        {solution ? solution.solution : "solution not ready"}
      </SolutionBox>
    </Wrapper>
  );
}

export default FoodSolution;
