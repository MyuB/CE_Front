import styled from "styled-components";

const Redeem = styled.div`
  color: black;
  height: 3vh;
  font-size: 2vh;
  line-height: 2vh;
  padding-left: 12%;
`;

const Temp = styled.input`
  color: black;
  background-color: #d9d9d9;
  height: 5vh;
  width: 77%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  line-height: 5vh;
  font-size: 3vh;
  border: 0.1rem solid black;
  border-radius: 0.8rem;
`;

function GroupJoin() {
  return (
    <div>
      <Redeem>초대코드</Redeem>
      <Temp placeholder="초대코드를 입력해주세요" className={"placeholder"} />
    </div>
  );
}

export default GroupJoin;
