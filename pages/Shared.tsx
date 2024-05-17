import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CardList from "../components/CardList";
import { getSampleFolderData } from "../api/Api";
import { useEffect, useState } from "react";
import useData from "../hooks/useData";
import PropTypes from "prop-types";
import SearchInput from "@/components/SearchInput";

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

interface SharedProps {
  links: Link[];
}

export async function getStaticProps() {
  const res = await getSampleFolderData();
  const links: Link[] | undefined = res?.folder?.links;
  return {
    props: {
      links,
    },
  };
}

function Shared({ links }: SharedProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (term: string): void => {
    setSearchTerm(term);
  };

  return (
    <>
      <Nav />
      <Header />
      <SearchInput onSearch={handleSearch} />
      {links && <CardList links={links} folders={[]} searchTerm={searchTerm} />}
      <Footer />
    </>
  );
}

Shared.protoTypes = {
  links: PropTypes.array,
};

export default Shared;
