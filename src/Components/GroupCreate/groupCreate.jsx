import styled from "styled-components";
import React from "react";
import "./groupCreate.scss";
import { useState } from "react";

const OuterText = styled.div`
  color: black;
  height: 3vh;
  font-size: 2vh;
  line-height: 2vh;
  padding-left: 12%;
`;

const InputBox = styled.input`
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
  color: black;
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

const CheckBox = styled.input`
  width: 5vh;
`;

function GroupCreate() {
  const [inputs, setInputs] = useState({
    startDate: "",
    endDate: "",
  });

  const { startDate, endDate } = inputs;

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    if (!dateVerification()) {
      alert("please check your dates");
    }
    setInputs({
      startDate: "",
      endDate: "",
    });
  };

  const dateVerification = () => {
    return startDate < endDate ? true : false;
  };
  return (
    <React.Fragment>
      <div>
        <OuterText>그룹명</OuterText>
        <InputBox type="text" placeholder="그룹명을 입력해주세요" />
      </div>
      <div>
        <OuterText>시작기간</OuterText>
        <InputBox
          type="date"
          data-placeholder="DD, MM, YYYY"
          onChange={onChange}
          value={startDate}
          name="startDate"
        />
      </div>
      <div>
        <OuterText>종료기간</OuterText>
        <InputBox
          type="date"
          data-placeholder="DD, MM, YYYY"
          onChange={onChange}
          value={endDate}
          name="endDate"
        />
      </div>
      <div className={"checkbox-wrapper"}>
        <div>
          <CheckBox type="checkbox" />
          <span>음식</span>
        </div>
        <div>
          <CheckBox type="checkbox" />
          <span>교통</span>
        </div>
      </div>
      <ConfirmBtn onClick={onReset}>초대코드 생성</ConfirmBtn>
    </React.Fragment>
  );
}

export default GroupCreate;
