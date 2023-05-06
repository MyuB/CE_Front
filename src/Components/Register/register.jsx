import { emailVerification } from "API/email";
import { useState } from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SmallWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
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

const RegisterBox = styled.div`
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

const EmailWrapper = styled.div`
  position: relative;
`;

const VerificationButton = styled.div`
  position: absolute;
  right: 10vw;
  top: 0.5vh;
  border: 0.1lvh solid #92b8b1;
  border-radius: 1vh;
  height: 3.5vh;
  line-height: 3.5vh;
  width: 20vw;
  text-align: center;
`;

function Register() {
  const [verification, setVerification] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordValidation: "",
    emailCode: "",
  });
  //this is for check if given two passwords are same
  const [pwValidation, setPwValidation] = useState("");

  const checkPassword = () => {
    return inputs.password === pwValidation;
  };

  const onClickVerification = () => {
    setVerification(true);
    emailVerification(inputs.email).then((res) =>
      setInputs({
        ...inputs,
        emailCode: String(res.code),
      })
    );
  };

  const checkEmailCode = () => {};

  const onChange = ({ target }) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const tryRegister = () => {
    if (!checkPassword) {
      alert("비밀번호가 일치하지 않아요!");
      return;
    }
  };

  return (
    <MainWrapper>
      <LargeText>{"Sign Up"}</LargeText>
      <ComponentsWrapper>
        <SmallWrapper>
          <SmallText>{"이름"}</SmallText>
          <InputBox name="name" />
        </SmallWrapper>
        <SmallWrapper>
          <SmallText>{"이메일"}</SmallText>
          <EmailWrapper>
            <InputBox name="email" />
            <VerificationButton onClick={onClickVerification}>
              {"인증번호"}
            </VerificationButton>
          </EmailWrapper>
        </SmallWrapper>
        {verification && (
          <SmallWrapper>
            <SmallText>{"인증번호"}</SmallText>
            <EmailWrapper>
              <InputBox name="emailCode" />
              <VerificationButton onClick={onClickVerification}>
                {"확인"}
              </VerificationButton>
            </EmailWrapper>
          </SmallWrapper>
        )}
        <SmallWrapper>
          <SmallText>{"비밀번호"}</SmallText>
          <InputBox name="password" />
        </SmallWrapper>
        <SmallWrapper>
          <SmallText>{"비밀번호 확인"}</SmallText>
          <InputBox />
        </SmallWrapper>
      </ComponentsWrapper>

      <RegisterBox>{"REGISTER"}</RegisterBox>
    </MainWrapper>
  );
}

export default Register;
