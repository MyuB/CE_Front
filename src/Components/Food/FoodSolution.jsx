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
  padding-top: 9vh;
  font-size: 3vh;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`;

function FoodSolution() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    getFoodSolution().then((res) => {
      setSolution(res.data.solution);
    });
  }, []);

  return (
    <Wrapper>
      <SolutionBox className={"word"}>
        {solution ? solution : "solution not ready"}
      </SolutionBox>
    </Wrapper>
  );
}

export default FoodSolution;
