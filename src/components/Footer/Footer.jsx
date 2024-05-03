import React from "react";
import FooterSnsItem from "./FooterSnsItem";
import { Link } from "react-router-dom";
import * as S from "./Footer.styled";

const snsList = [
  {
    id: 1,
    name: "facebook",
    url: "https://www.facebook.com/",
  },
  {
    id: 2,
    name: "twitter",
    url: "https://twitter.com/",
  },
  {
    id: 3,
    name: "youtube",
    url: "https://www.youtube.com/",
  },
  {
    id: 4,
    name: "instagram",
    url: "https://www.instagram.com/",
  },
];

export default function Footer() {
  return (
    <S.StyledFooter>
      <S.StyledInner>
        <S.StyledAddress>©codeit - 2023</S.StyledAddress>
        <S.StyledNavList>
          <li>
            <Link to='/privacy'>Privacy Policy</Link>
          </li>
          <li>
            <Link to='/faq'>FAQ</Link>
          </li>
        </S.StyledNavList>
        <S.StyledSnsList>
          {snsList.map((item) => (
            <FooterSnsItem
              key={item.id}
              id={item.id}
              name={item.name}
              url={item.url}
            />
          ))}
        </S.StyledSnsList>
      </S.StyledInner>
    </S.StyledFooter>
  );
}
