
import React from "react";
import styled from "styled-components";
import "./reset.css";
import appAip from "../src/api/appAip";
import NavigationBar from "../src/components/NavigationBar";
import MainProfile from "../src/components/MainProfile";
import Search from "../src/components/Search";
import Cards from "../src/components/Cards";
import Footer from "../src/components/Footer";

// export function TestLoginData(userData) {
//   if (!userData) {
//     return <>테스트</>;
//   }

//   console.log("?", userData);
// }

export const ContentBlock = styled.div`
  margin: 2.5rem 10rem;

  @media screen and (max-width: 1124px) {
    margin: 2.5rem 4.34rem;
  }

  @media screen and (max-width: 545px) {
    margin: 2.5rem 2.03rem;
  }
`;

function App() {
  const { items, user, profile } = appAip();

  return (
    <>
      <NavigationBar user={user} />
      <MainProfile profile={profile} />
      <ContentBlock>
        <Search />
        <Cards items={items} />
      </ContentBlock>
      <Footer />
    </>
  );
}

export default App;
