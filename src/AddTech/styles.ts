import styled from "styled-components"

export const ModalContainer = styled.div`
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  background-color: #212529;
  width: 25%;
  height: 40%;
  display: flex;
  flex-direction: column;
}

.openModal {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212529;
  border-radius: 4px;
  border: none;
  width: 25px;
  height: 25px;
  color: white;
  cursor: pointer;
}

.header {
  display: flex;
  justify-content: space-around;
  background-color: #343b41;
}
.header h1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #f8f9fa;
}
.header button {
  background: none;
  border: none;
  color: #f8f9fa;
}
.form {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-around;
}
label {
  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  color: #f8f9fa;
}
.inputTech {
  display: flex;
  flex-direction: row;
  align-items: center;
  
  width: 20vw;
  height: 35px;
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  border-radius: 4px;
  
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;
}
.inputTech:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
.selectTech {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16.2426px;
  
  width: 20vw;
  height: 40px;
  background: #343b41;
  border: 1.2182px solid #f8f9fa;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16.2426px;
  line-height: 26px;
  color: #f8f9fa;
}

.btnAddTech {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 35px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
}
@media screen and (max-width: 700px) {
  .modal {
    width: 50%;
  }
  .inputTech {
    width: 45vw;
  }
  .selectTech {
    width: 45vw;
  }
  .btnAddTech {
    width: 45vw;
  }
}
@media screen and (max-width: 320px) {
  .modal {
    width: 90%;
  }
  .inputTech {
    width: 85vw;
  }
  .selectTech {
    width: 85vw;
  }
  .btnAddTech {
    width: 85vw;
  }
}

`