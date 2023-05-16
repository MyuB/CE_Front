import { joinGourp } from "API/group";
import React, { useState } from "react";
import styled from "styled-components";

const Redeem = styled.div`
  color: black;
  height: 3vh;
  font-size: 2vh;
  line-height: 2vh;
  padding-left: 12%;
`;

const EnterCode = styled.input`
  background-color: #d0d0d0;
  height: 5vh;
  width: 77%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  line-height: 5vh;
  font-size: 3vh;
  border: none;
  border-radius: 0.8rem;
`;

const ConfirmBtn = styled.div`
  width: 20vh;
  height: 8vh;
  text-align: center;
  line-height: 8vh;
  font-size: 3vh;
  border-radius: 10px;
  margin: 15vh auto 0 auto;
  background-color: #009688;
  color: white;
  margin-bottom: 5vh;
`;

function GroupJoin() {
  const [inviteCode, setInviteCode] = useState("");

  const setGroupInviteCode = () => {
    window.localStorage.setItem("groupInviteCode", inviteCode);
  };

  const onChange = ({ target }) => {
    const { value } = target;
    setInviteCode(value);
  };

  const join = () => {
    joinGourp(inviteCode).then((res) => {
      alert(res.data.success);
      setGroupInviteCode();
    });
  };

  return (
    <React.Fragment>
      <Redeem>초대코드</Redeem>
      <EnterCode
        placeholder="초대코드를 입력해주세요"
        className={"placeholder"}
        name={"inviteCode"}
        onChange={onChange}
      />
      <ConfirmBtn onClick={join}>확인</ConfirmBtn>
    </React.Fragment>
  );
}

export default GroupJoin;
