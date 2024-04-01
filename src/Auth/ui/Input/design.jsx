import styled from "styled-components";

export const InputEntry = styled.div`
  max-width: 400px;
  width: 100%;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const InputLabel = styled.div`
  font-weight: 400;
  font-size: 14px;
  font-family: "Pretendard";
  line-height: 17px;
`;
export const InputWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 83px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
export const InputBinder = styled.div`
  width: 100%;
  height: 60px;
  position: relative;

  i {
    position: absolute;
    left: 90%;
    top: 40%;
  }
`;
export const InputField = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: 1px solid;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 18px 15px 18px 15px;
  border-color: ${(props) =>
    props.border === "Error" ? "#ff5b56" : "#ccd5e3"};
  &:focus {
    border-color: #6d6afe;
    outline: none;
  }
`;
export const ErrorMessage = styled.div`
  color: #ff5b56;
  font-size: 14px;
  font-weight: 400;
  font-family: "Pretendard";
  height: 17px;
`;