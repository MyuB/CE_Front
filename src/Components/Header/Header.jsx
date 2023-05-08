import styled from "styled-components";
import Line from "assets/Line.png";
import { useNavigate } from "react-router-dom";

//일반적으로 사용하는 Wrapper
const NormalWrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 10vh;
  width: 100%;
  border-bottom: 0.1lvh solid gray;
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
    if (componentUrl === "main")
      return <MainWrapper color={WrapperColor.white} />;

    return (
      <NormalWrapper color={WrapperColor.white}>{componentUrl}</NormalWrapper>
    );
  };

  return <div>{renderHeader()}</div>;
}

export default Header;
