
import { useState } from "react";
import React from "react";
import axios from 'axios';
import styled from "styled-components";
//import "./CertificationPage.scss";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopText = styled.div`
  color: black;
  font-size: 2vh;
  margin-left: 4vh;
    margin-top:4vh;
  // margin-left: 3vh;
`;


const DateBox = styled.input`
  border:none;
  background-color:transparent;
`;



//

const GreyLine = styled.div`
border-bottom: 0.3lvh solid #061941;
opacity:0.1;
margin-top:2vh;
margin-left: 4vh;
margin-right:4vh;
`;


const TableWrapper = styled.div`
  margin-left: 4vh;
  margin-right:4vh;
  margin-top:5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const GreyWrapper = styled.div`
margin-left: 4vh;
margin-right:4vh;
margin-top:5vh;
line-height: 5vh;
border-radius: 1vw;
background-color:#EDEFF7;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

const TableCell = styled.div`
  padding-left: 4vh;
  padding-right:4vh;
  font-size: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const AddBtn = styled.div`
height: 5vh;
margin-left: 4vh;
margin-right:4vh;
margin-top:5vh;
color: black;
font-size: 4vh;
line-height: 5vh;
background-color: #EDEFF7;
border-radius: 1vh;
text-align: center;

`;












function Certification() {

    const [inputs, setInputs] = useState({
      DateInput: "",
  });


  const [count, setCount] = useState(1);

  const handleAddBox = () => {
    setCount(count + 1);
  };


  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });





    
  };




  return (
    <MainWrapper>


  


  

      <TopText>일일 인증 최소 1회 이상</TopText>
      <GreyLine></GreyLine>
      <TableWrapper>
        <TableCell>이름{/* 여기에 이름 들어감 */}</TableCell>
        <TableCell>인증 사진</TableCell>
        <TableCell>날짜</TableCell>
      </TableWrapper>
      {[...Array(count)].map((_, index) => (
          <GreyWrapper>
          <TableCell>이름</TableCell>
          <TableCell>인증 사진</TableCell>
          <TableCell><DateBox
            type="date"
          /></TableCell>
        </GreyWrapper>
        ))}

      <AddBtn onClick={handleAddBox}>+</AddBtn>
    </MainWrapper>
  );
}

export default Certification;


