import { logInReq } from "API/account";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Login.scss";
import { setToken } from "utils/localStorage";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

const LargeText = styled.div`
  color: black;
  font-size: 6vh;
  margin-left: 3vh;
  margin-bottom: 6vh;
  margin-top: 3vh;
`;

const SmallText = styled.div`
  color: black;
  font-size: 2vh;
  margin-left: 3vh;
`;

const InputBox = styled.input`
  border: none;
  border-bottom: 0.3lvh solid #92b8b1;
  height: 5vh;
  width: 80vw;
  display: block;
  margin: 0;
  margin: 0 auto;
  padding: 0.1lvh 0.1lvh 0.1lvh 0.5lvh;
`;

const LoginBox = styled.div`
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

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = inputs;

  const handleLogin = () => {
    logInReq(id, password).then((res) => {
      if (res.success) {
        setToken(res.access_token, res.refresh_token);
        navigate("/main");
      } else {
        alert("something wrong");
      }
    });
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
      <LargeText>Login</LargeText>
      <SmallWrapper>
        <SmallText>Email</SmallText>
        <InputBox onChange={onChange} name="id" />
      </SmallWrapper>
      <SmallWrapper>
        <SmallText>Password</SmallText>
        <InputBox type={"password"} onChange={onChange} name="password" />
      </SmallWrapper>
      <LoginBox onClick={handleLogin}>Next</LoginBox>
    </MainWrapper>
  );
}

export default Login;
