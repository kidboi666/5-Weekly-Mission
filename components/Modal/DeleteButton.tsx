import styled from "styled-components";

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #ff5b56;
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

const Span = styled.span`
  color: #9fa6b2;
  text-align: center;
  font-size: 14px;
  width: 100%;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DeleteButton = ({
  info,
  onClick,
}: {
  info?: string;
  onClick?: (...prams: any[]) => void;
}) => {
  return (
    <>
      <Span>{info}</Span>
      <Button onClick={onClick} type="button">
        삭제하기
      </Button>
    </>
  );
};

export default DeleteButton;
