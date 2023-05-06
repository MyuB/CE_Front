import styled from "styled-components";

const MainWrapper = styled.div`
  background-color: ${(props) => props.color};
  height: 10vh;
  width: 100%;
`;

function Header() {
  return (
    <div>
      <MainWrapper color="#fff"></MainWrapper>
    </div>
  );
}

export default Header;
