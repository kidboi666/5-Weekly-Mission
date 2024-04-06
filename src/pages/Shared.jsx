import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { getSampleFolderData } from "../api/Api";
import { useEffect } from "react";
import useData from "../hooks/useData";
import SearchInput from "../components/SearchInput";
import PropTypes from "prop-types";

function Shared() {
  const linkData = useData(getSampleFolderData);
  const links = linkData?.folder.links;

  useEffect(() => {
    console.log(linkData);
  }, [linkData]);
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

Shared.protoTypes = {
  links: PropTypes.array,
};

export default Shared;
