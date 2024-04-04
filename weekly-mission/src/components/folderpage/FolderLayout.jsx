import styled from "styled-components";
import SearchBar from "../shared/Searchbar";
import Foldermenu from "./Foldermenu";

const FolderLayout_Container = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1124px;
  gap: 40px;
`;

const FolderLayout = () => {
  return (
    <FolderLayout_Container>
      <SearchBar />
      <Foldermenu />
    </FolderLayout_Container>
  );
};

export default FolderLayout;
