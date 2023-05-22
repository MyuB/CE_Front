import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./group.scss";

const GroupButton = styled.div`
  background-color: #92b8b1;
  color: white;
  font-size: 2.5vh;
  width: 40vh;
  height: 8vh;
  text-align: center;
  line-height: 8vh;
  margin-bottom: 3vh;
  border-radius: 10px;
  font-weight: bold;
`;

const WhiteGroupButton = styled.div`
  background-color: #fff;
  color: #009688;
  font-size: 2.5vh;
  width: 40vh;
  height: 8vh;
  text-align: center;
  line-height: 8vh;
  margin-bottom: 3vh;
  border-radius: 10px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Group() {
  const navigate = useNavigate();

  const createGroup = () => {
    navigate("/groupcreate");
  };
  const joinGroup = () => {
    navigate("/groupjoin");
  };
  const rankGroup = () => {
    navigate("/rank");
  };
  return (
    <div className={"button-wrapper"}>
      <div className={"top_header"}>{"Group"}</div>
      <ButtonWrapper>
        {" "}
        <GroupButton onClick={createGroup}>{"그룹만들기"}</GroupButton>
        <WhiteGroupButton onClick={joinGroup}>
          {"그룹참여하기"}
        </WhiteGroupButton>
        <GroupButton onClick={rankGroup}>{"내 그룹"}</GroupButton>
      </ButtonWrapper>
    </div>
  );
}

export default Group;
