// 첫 번째 페이지
import { useState } from "react";
import styled from "styled-components";


const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;


const InfoText = styled.div`
  color: black;
  font-size: 2vh;
  margin-left: 8vh;
  font-weight:bold;
`;

const GreyBox = styled.input`
  width: 80vw;
  padding: 0.1lvh 0.1lvh 0.1lvh 0.5lvh;
  margin: 10vh auto 0 auto;
  margin-top:5vh;
  line-height: 5vh;
  border-radius: 1vw;
  border: none;
  background-color:#E5E5E5;
  display: flex;
  opacity:0.5;
`;

const ModifyBox = styled.div`
  height: 5vh;
  width: 80vw;
  color: white;
  font-weight: bold;
  font-size: 2vh;
  line-height: 5vh;
  background-color: #92b8b1;
  border-radius: 1vh;
  text-align: center;
  margin: 10vh auto 0 auto;
`;



function MyPage() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "username") {
      setUsername(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 수정 버튼을 클릭할 때 사용자 정보 업데이트를 처리하는 로직 추가



    
  };
  return (


    <div>

      <form onSubmit={handleSubmit}>
        <InfoWrapper>
        <InfoWrapper>
          <InfoText>이름</InfoText>
          <GreyBox
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
          </InfoWrapper>
          <InfoWrapper>
          <InfoText>이메일</InfoText>
          <GreyBox
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          </InfoWrapper>
        </InfoWrapper>
        <ModifyBox type="submit">수정</ModifyBox>
      </form>
    </div>
  );
}

export default MyPage;
