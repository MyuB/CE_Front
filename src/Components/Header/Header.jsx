import styled from "styled-components";
import leftArrow from "assets/left-arrow.png";
import { useNavigate } from "react-router-dom";

//일반적으로 사용하는 Wrapper
const NormalWrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 10vh;
  width: 100%;
  border-bottom: ${(props) => (props.line ? "0.1lvh solid gray" : "none")};
  text-align: center;
  line-height: 10vh;
  font-size: 3vh;
  font-weight: bold;
`;

//Traffic에서만 사용할 Wrapper
const TrafficWrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 10vh;
  width: 100%;
`;
//Main Page에서 사용될 Wrapper
const MainWrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 5vh;
  width: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftBtn = styled.img`
  height: 4vh;
  width: 4vh;
`;

const EmptyBox = styled.div`
  height: 10vh;
  width: 4vh;
`;

function Header() {
  const navigate = useNavigate();

  const WrapperColor = {
    white: "#ffffff",
    traffic: "rgba(146, 184, 177, 0.2);",
  };

  const parseHref = () => {
    const url = String(window.location.href).split("/");
    return url.pop();
  };

  const renderHeader = () => {
    const componentUrl = parseHref();
    if (componentUrl === "traffic")
      return <TrafficWrapper color={WrapperColor.traffic}></TrafficWrapper>;
    if (componentUrl === "group")
      return (
        <NormalWrapper color={WrapperColor.traffic}>
          <BtnWrapper>
            <LeftBtn
              src={leftArrow}
              alt={"temp"}
              onClick={() => navigate(-1)}
            />
            <EmptyBox />
          </BtnWrapper>
        </NormalWrapper>
      );
    if (componentUrl === "main")
      return <MainWrapper color={WrapperColor.white} />;
    if (componentUrl === "") {
      return <TrafficWrapper color={WrapperColor.traffic} />;
    }

    return (
      <NormalWrapper color={WrapperColor.white} line={"ok"}>
        <BtnWrapper>
          <LeftBtn src={leftArrow} alt={"temp"} onClick={() => navigate(-1)} />
          <div>{componentUrl}</div>
          <EmptyBox />
        </BtnWrapper>
      </NormalWrapper>
    );
  };

  return <div>{renderHeader()}</div>;
}

export default Header;
