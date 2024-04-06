import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { getFolderData } from "../api/Api";
import useData from "../hooks/useData";
import SearchInput from "../components/SearchInput";
import PropTypes from "prop-types";

function Folder() {
  const linkData = useData(getFolderData);

  const links = linkData?.folder.links;

  return (
    <>
      <Nav />
      <Header />
      <SearchInput />
      {links && <CardList links={links} />}
      <Footer />
    </>
  );
}

Folder.protoTypes = {
  links: PropTypes.array,
};

export default Folder;
