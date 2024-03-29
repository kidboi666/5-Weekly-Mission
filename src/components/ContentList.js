import React from "react";
import styled from "styled-components";
import contentImage1 from "../assets/contentImage1.png";
import contentImage2 from "../assets/contentImage2.png";
import contentImage3 from "../assets/contentImage3.png";
import contentImage4 from "../assets/contentImage4.png";
import contentImage5 from "../assets/contentImage5.png";
import contentImage6 from "../assets/contentImage6.png";
import contentImage7 from "../assets/contentImage7.png";
import contentImage8 from "../assets/contentImage8.png";
import contentImage9 from "../assets/contentImage9.png";

const imgList = [
  contentImage1,
  contentImage2,
  contentImage3,
  contentImage4,
  contentImage5,
  contentImage6,
  contentImage7,
  contentImage8,
  contentImage9,
];

const ContentListBlock = styled.div`
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
  }

  img {
    position: relative;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    // display: flex;
    width: 21.25rem;
  }

  p {
    // position: absolute;
    top: 10px;
  }
`;

// function formatDate(value) {
//   const date = new Date(value);
//   return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
// }

function ReviewListItem({ item }) {
  const id = item.id;

  return (
    <div>
      <img src={imgList[id - 1]} alt={`contentImage${id}`} />
      <p>{`id : ${item.id}`}</p>
    </div>
  );
}

function ContentList({ items }) {
  return (
    <ContentListBlock>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <ReviewListItem item={item} />
            </li>
          );
        })}
      </ul>
    </ContentListBlock>
  );
}

export default ContentList;
