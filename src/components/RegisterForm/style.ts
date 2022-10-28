import styled from "styled-components";

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  background-color: #212529;
  height: 95vh;
  justify-content: space-around;

  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;
    color: #f8f9fa;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868e96;
  }
  label {
    display: flex;
    flex-direction: column;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    color: #f8f9fa;
    width: 90%;
  }
  .error {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 8.59437px;
    line-height: 18px;
    color: #e83f5b;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 22.3336px;
    gap: 10.15px;
    background: #59323f;
    border: 1.2182px solid #59323f;
    border-radius: 4px;
    width: 90%;
    height: 42px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #ffffff;
  }
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
    background-color: #212529;

    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 14.3916px;
      line-height: 22px;
      color: #f8f9fa;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 9.59437px;
      line-height: 18px;
      color: #868e96;
    }
    label {
      display: flex;
      flex-direction: column;
      font-family: "Inter";
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      color: #f8f9fa;
      width: 90%;
    }
    .error {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 8.59437px;
      line-height: 18px;
      color: #e83f5b;
    }
  }
  @media screen and (max-width: 330px) {
    display: flex;
    flex-direction: column;
    width: 95%;
    align-items: center;
    background-color: #212529;
  
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.3916px;
    line-height: 22px;
    color: #f8f9fa;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 9.59437px;
    line-height: 18px;
    color: #868e96;
  }
  label {
    display: flex;
    flex-direction: column;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    color: #f8f9fa;
  }
  .error {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 8.59437px;
    line-height: 18px;
    color: #e83f5b;
  }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 42px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868e96;
  }
  @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
    
    input {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      height: 48px;
      background: #343b41;
      border: 1.2182px solid #343b41;
      border-radius: 4px;
      flex: none;
      order: 1;
      flex-grow: 0;
    }
    input:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
    select {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 90%;
      height: 48px;
      background: #343b41;
      border: 1.2182px solid #343b41;
      border-radius: 4px;
      flex: none;
      order: 1;
      flex-grow: 0;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
      color: #868e96;
    }
  }
  @media screen and (max-width: 330px) {
  
  .inputRegister {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    gap: 8.12px;
    width: 90vw;
    height: 15vw;

    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    flex: none;
    order: 1;
    flex-grow: 0;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  select {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 12.9865px;
    gap: 8.12px;
    width: 90vw;
    height: 15vw;

    background: #343b41;
    border: 0.973988px solid #343b41;
    border-radius: 3.19812px;
    flex: none;
    order: 1;
    flex-grow: 0;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13.9865px;
    line-height: 21px;
    color: #868e96;
  }
}
`;

