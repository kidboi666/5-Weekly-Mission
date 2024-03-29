import React from "react";
import { items } from "../api/apiTest";
import styled from "styled-components";
import Search from "./Search";
import ContentList from "./ContentList";

const ContentBlock = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  div {
    display: flex;
    width: 66.25rem;
    margin: 0 auto;
    flex-direction: column;
  }

  img {
    width: 21.25rem;
  }
`;

function Content() {
  const id = items.folder.links[0].id;
  const testImg = items.folder.links[id - 1].imageSource;
  // const listItems = items.map((item) => {
  //   const testImg = item.folder.links[id].imageSource;
  //   <img src={testImg} alt="item" />;
  // });

  return (
    <ContentBlock>
      <div>
        <Search />
        <p>데이터 테스트</p>
        <p>{items.folder.links[0].id}</p>
        <img src={testImg} alt="item" />
        <p>{items.folder.links[0].createdAt}</p>
        <p>{items.folder.links[0].title}</p>
        <p>{items.folder.links[0].description}</p>
        <p>{items.folder.links[0].url}</p>
        {/* <li>{listItems}</li> */}
        {/* <ContentList items={items} /> */}
      </div>
    </ContentBlock>
  );
}

export default Content;
