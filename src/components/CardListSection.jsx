import NoPage from "./NoPage";
import useSelectFolder from "../hooks/useSelectFolder";
import CardList from "./CardList";

function CardListSection({ url }) {
  const result = useSelectFolder({ url });
  const links = result?.data;
  return (
    <>{links && links.length === 0 ? <NoPage /> : <CardList links={links} />}</>
  );
}

export default CardListSection;
