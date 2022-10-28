import styled from "styled-components";

export const BtnHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 16.2426px;
  gap: 10.15px;

  background: #212529;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: #f8f9fa;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25%;

  @media screen and (max-width: 700px) {
    width: 40%;
  }
  @media screen and (max-width: 330px) {
    width: 95%;
  }
`;
