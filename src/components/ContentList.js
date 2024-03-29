import React, { useState } from "react";
import styled from "styled-components";

const ContentListBlock = styled.div`
  div {
    position: relative;
    width: 21.25rem;
  }

  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
  }

  img {
    // position: relative;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    // display: flex;
    width: 21.25rem;
  }

  p {
    position: absolute;
    top: -100px;
  }
`;

function ContentListItemTitle({ item }) {
  const title = item.title;
  return <p>{title}</p>;
}

function ContentListItemImg({ item }) {
  const img = item.imageSource;
  return <img src={img} alt={item.title} />;
}

function ContentList({ itemTest }) {
  let testArray = [];

  for (let i = 0; i <= 8; i++) {
    testArray.push(itemTest[i]);
  }

  return (
    <ContentListBlock>
      <>
        {testArray.map((item) => {
          return (
            <div>
              <ContentListItemImg item={item} />
              <div>
                <ContentListItemTitle item={item} />
                {/* {item.createdAt}
                {item.title}
                {item.description}
                {item.url} */}
              </div>
            </div>
          );
        })}
      </>
    </ContentListBlock>
  );
}

export default ContentList;
