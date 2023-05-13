// 첫 번째 페이지
import { myPageReq } from "API/account";
import { useEffect, useState } from "react";
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
  font-weight: bold;
`;

const GreyBox = styled.input`
  width: 80vw;
  padding: 0.1lvh 0.1lvh 0.1lvh 0.5lvh;
  margin: 10vh auto 0 auto;
  margin-top: 5vh;
  line-height: 5vh;
  border-radius: 1vw;
  border: none;
  background-color: #e5e5e5;
  display: flex;
  opacity: 0.5;
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
  const [serverData, setServerData] = useState({
    username: "",
    email: "",
  });
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    myPageReq().then((res) => {
      setServerData(res.user_name, res.email);
    });
  }, []);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
              onChange={onChange}
              placeholder={serverData.username}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoText>이메일</InfoText>
            <GreyBox
              type="email"
              name="email"
              onChange={onChange}
              placeholder={serverData.email}
            />
          </InfoWrapper>
        </InfoWrapper>
        <ModifyBox type="submit">수정</ModifyBox>
      </form>
    </div>
  );
}

export default MyPage;
