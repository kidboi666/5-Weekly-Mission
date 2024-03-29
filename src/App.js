import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardList from "./components/CardList.js";
import { useEffect, useState } from "react";
import { getFolderData } from "./api/Api";
import useData from "./hooks/useData";

function App() {
  const [links, setLinks] = useState([]);

  const linkData = useData(getFolderData);

  const loadLinkData = () => {
    setLinks(linkData?.folder.links);
  };

  useEffect(() => {
    loadLinkData();
  }, [linkData]);

  console.log(links);

  return (
    <>
      <Nav />
      <Header />
      {links && <CardList links={links} />}
      <Footer />
    </>
  );
}

export default App;
