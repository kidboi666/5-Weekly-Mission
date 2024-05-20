import FolderData from "@/features/folder/ui/folderData/FolderData";
import Header from "@/entities/folder/ui/folderHeader/Header";

import Footer from "@//widgets/home/ui/footer/Footer";
import React from "react";

import AddLink from "@/features/link/ui/addLink/AddLink";
import SearchBar from "@/features/link/ui/searchLink/SearchBar";
import PaddingPage from "@//widgets/folder/ui/PaddingPage";
import FolderList from "@//widgets/folder/ui/folderList/FolderList";
import AddFolderBtn from "@/features/folder/ui/addFolder/AddFolderBtn";

const index = () => {
  return (
    <>
      <Header />
      <AddLink />
      <SearchBar />
      <PaddingPage>
        <FolderList />
        <FolderData />
      </PaddingPage>
      <Footer />
      <AddFolderBtn />
    </>
  );
};

export default index;
