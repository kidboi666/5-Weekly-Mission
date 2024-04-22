import styled from "styled-components";
import SearchBar from "../shared/Searchbar";
import Foldermenu from "./Foldermenu";
import { useState, useEffect } from "react";

const FolderLayoutContainer = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1124px;
  gap: 40px;
  margin-bottom: 50px;
`;

const FolderLayout = () => {
  const folderId = null;
  return (
    <FolderLayoutContainer>
      <SearchBar />
      <Foldermenu folderId={folderId} />
    </FolderLayoutContainer>
  );
};

export default FolderLayout;
