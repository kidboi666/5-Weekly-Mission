import NoPage from "./NoPage";
import useSelectFolder from "../hooks/useSelectFolder";
import CardList from "./CardList";

function CardListSection({ url, folders }) {
  const result = useSelectFolder({ url });
  const links = result?.data;
  return (
    <>
      {links && links.length === 0 ? (
        <NoPage />
      ) : (
        <CardList folders={folders} links={links} />
      )}
    </>
  );
}

export default CardListSection;
