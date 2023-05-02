import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./group.scss";

const GroupButton = styled.div`
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
      <GroupButton onClick={createGroup}>{"그룹만들기"}</GroupButton>
      <GroupButton onClick={joinGroup}>{"그룹참여하기"}</GroupButton>
      <GroupButton onClick={rankGroup}>{"내 그룹으로 가기"}</GroupButton>
    </div>
  );
}

export default Group;
