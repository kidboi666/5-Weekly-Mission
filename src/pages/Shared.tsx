import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { getSampleFolderData } from "../api/Api";
import { useEffect } from "react";
import useData from "../hooks/useData";
import SearchInput from "../components/SearchInput";
import PropTypes from "prop-types";

interface Link {
  created_at: string;
  description: string;
  folder_id: number;
  id: number;
  image_source: string;
  title: string;
  updated_at: number | null;
  url: string;
  [key: string]: any;
}

function Shared() {
  const linkData = useData(getSampleFolderData);
  const links: Link[] | undefined = linkData?.folder?.links;

  useEffect(() => {
    console.log(linkData);
  }, [linkData]);
  return (
    <>
      <Nav />
      <Header />
      <SearchInput />
      {links && <CardList links={links} folders={[]} />}
      <Footer />
    </>
  );
}

Shared.protoTypes = {
  links: PropTypes.array,
};

export default Shared;
