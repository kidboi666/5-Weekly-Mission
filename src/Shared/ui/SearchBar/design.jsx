import styled from "styled-components";

export const SearchBarTemplate = styled.div`
  position: relative;
  width: 100%;
`;
export const Input = styled.input`
  width: 100%;
  max-width: 106rem;
  height: 4.3rem;
  padding-left: 3.8rem;
  padding-right: 1.6rem;
  border-radius: 1rem;
  border-style: none;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    height: 5.4rem;
    padding-left: 4.2rem;
    font-size: 1.6rem;
    line-height: 150%;
  }

  ::placeholder {
    color: #666666;
  }
`;
export const Img = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
`;
