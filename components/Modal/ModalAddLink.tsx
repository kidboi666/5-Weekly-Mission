import ModalFrame from "./ModalFrame";
import BlueButton from "./BlueButton";
import styled from "styled-components";
import { GRAY5 } from "../color";
import { useState, Fragment } from "react";
import { LinkItem } from "../CardList";

const Span = styled.span`
  color: #9fa6b2;
  width: 100%;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 8px 0 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Folders = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  margin-bottom: 24px;
`;

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

interface AddLinkProps {
  url?: string;
  onClick: (...props: any[]) => void;
  folder: { [folder: string]: any };
}

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

const ModalAddLink = ({ url, onClick, folder }: AddLinkProps) => {
  const Adding = () => {
    console.log("추가 되는 무언가");
  };
  return (
    <ModalFrame name="폴더에 추가" onClick={onClick}>
      <Span>{url}</Span>
      <Folders>
        {folder?.data.map((item: LinkItem) => {
          if (item.id !== 14)
            return (
              <Fragment key={item?.id * -17}>
                <Folder item={item} />
              </Fragment>
            );
        })}
      </Folders>
      <BlueButton onClick={Adding}>추가하기</BlueButton>
    </ModalFrame>
  );
};

export default ModalAddLink;
