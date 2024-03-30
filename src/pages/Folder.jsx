import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { useEffect, useState } from "react";
import { getFolderData } from "../api/Api";
import useData from "../hooks/useData";
import SearchInput from "../components/SearchInput";

function Folder() {
  const [links, setLinks] = useState([]);

  const linkData = useData(getFolderData);

  useEffect(() => {
    setLinks(linkData?.folder.links);
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

export default Folder;
