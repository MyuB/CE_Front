import styled from "styled-components";
import { useEffect, useState } from "react";
import { getFoodSolution } from "API/food";

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

  useEffect(() => {
    getFoodSolution().then((res) => setSolution(res.data[0]));
  }, []);

  return (
    <Wrapper>
      <SolutionBox>
        {solution ? solution.solution : "solution not ready"}
      </SolutionBox>
    </Wrapper>
  );
}

export default FoodSolution;