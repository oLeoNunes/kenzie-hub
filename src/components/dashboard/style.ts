import styled from "styled-components";

export const DashContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  border-top: solid 1px #212529;

  .headerDashboard {
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    color: #f8f9fa;
  }

  main {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: solid 1px #212529;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #868e96;
  }

  .headerTech {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
`;
