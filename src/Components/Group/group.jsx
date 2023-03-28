import styled from "styled-components";
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
  return (
    <div className={"button-wrapper"}>
      <GroupButton>{"그룹만들기"}</GroupButton>
      <GroupButton>{"그룹참여하기"}</GroupButton>
    </div>
  );
}

export default Group;
