import styled from "styled-components";

export const SearchbarContainer = styled.div`
  position: relative;
  padding: 0 32px;
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 15px 20px 15px 40px;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: none;
`;

export const Image = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 45px;
  transform: translateY(-50%);
`;

export const ClearButton = styled.img`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  cursor: pointer;
`;
