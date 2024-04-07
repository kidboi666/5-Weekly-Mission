// 폴더 페이지
import React from "react";
import folderAip from "../api/folderAip";
import NavigationBar from "../components/NavigationBar";
import LinkAddBar from "../components/LinkAddBar";
import Search from "../components/Search";
import FolderButton from "../components/FolderButton";
import Footer from "../components/Footer";
import { ContentBlock } from "../App";

function FolderPage() {
  const { folderItems, folderUser, folderContent } = folderAip();

  return (
    <>
      <NavigationBar user={folderUser[0]} folder="folder" />
      <LinkAddBar />
      <ContentBlock>
        <Search />
        <FolderButton folderItems={folderItems} items={folderContent} />
      </ContentBlock>
      <Footer />
    </>
  );
}

export default FolderPage;
