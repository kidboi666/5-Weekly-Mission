import React, { useEffect, useState } from "react";
import { StyledSectionWrap } from "../Common.styled";
import LinkInput from "../../components/LinkInput/LinkInput";
import * as S from "./FolderPage.styled";
import { getFoldersItems, getFoldersMenu } from "../../api";
import Search from "../../components/Search/Search";
import CardList from "../../components/CardList/CardList";
import MenuButton from "../../components/MenuButton/MenuButton";
import AddIcon from "../../assets/add_icon.png";
import ShareIcon from "../../assets/share_icon.png";
import PenIcon from "../../assets/pen_icon.png";
import DeleteIcon from "../../assets/delete_icon.png";

const CONTROLS = [
  {
    name: "공유",
    icon: ShareIcon,
  },
  {
    name: "이름 변경",
    icon: PenIcon,
  },
  {
    name: "삭제",
    icon: DeleteIcon,
  },
];

export default function FolderPage() {
  const [menu, setMenu] = useState();
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const nextMenu = await getFoldersMenu();
    const nextItems = await getFoldersItems();
    setMenu(nextMenu);
    setItems(nextItems);
  };
  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <S.StyledTopWrap>
        <LinkInput />
      </S.StyledTopWrap>
      <StyledSectionWrap>
        <Search />
        <S.StyledMenuWrap>
          <S.StyledMenuList>
            {menu?.map((item, index) => (
              <MenuButton key={index} item={item} />
            ))}
          </S.StyledMenuList>
          <S.StyledAddButton>
            폴더 추가
            <S.StyledAddIcon src={AddIcon} alt='+' />
          </S.StyledAddButton>
        </S.StyledMenuWrap>
        <S.StyledTitleWrap>
          <S.StyledTitle>유용한 글</S.StyledTitle>
          <S.StyledControlWrap>
            {CONTROLS.map((item, index) => (
              <S.StyledControl key={index}>
                <S.StyledControlIcon src={item.icon} alt='' />
                {item.name}
              </S.StyledControl>
            ))}
          </S.StyledControlWrap>
        </S.StyledTitleWrap>
        {!items.length && (
          <S.StyledNoData>저장된 링크가 없습니다</S.StyledNoData>
        )}
        {items && <CardList items={items} />}
      </StyledSectionWrap>
    </>
  );
}
