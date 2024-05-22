import styled from "styled-components";
import { GRAY5 } from "../../color";
import { useState } from "react";

const Folder = ({ item }: { item: { [folder: string]: any } }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <Folderr
      tabIndex={0}
      role="button"
      $clicked={clicked}
      onClick={handleClick}
    >
      <FolderName>{item?.name}</FolderName>
      <FolderLinks>{item?.link.count}개 링크</FolderLinks>
    </Folderr>
  );
};

export default Folder;

const Folderr = styled.li<{ $clicked: boolean }>`
  display: flex;
  padding: 8px;
  column-gap: 8px;
  width: 280px;
  border-radius: 8px;
  background-color: ${({ $clicked }) => $clicked && GRAY5};
  background-image: url(${({ $clicked }) => $clicked && "/check.png"});
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: 97%;
  &:hover {
    background-color: ${GRAY5};
  }
`;

const FolderName = styled.strong`
  color: #373740;
  font-size: 16px;
  line-height: 24px;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FolderLinks = styled.span`
  color: #9fa6b2;
  font-size: 14px;
  line-height: normal;
`;
