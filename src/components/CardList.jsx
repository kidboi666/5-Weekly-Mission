import CardListItem from "./CardListItem";
import NoPage from "./NoPage";
import useSelectFolder from "../hooks/useSelectFolder";

function CardList({ url }) {
  const result = useSelectFolder({ url });
  const links = result?.data;
  console.log(links);
  return (
    <>
      {links && links.length === 0 ? (
        <NoPage />
      ) : (
        <ul className="CardLinkList">
          {links &&
            links.map((link) => (
              <li key={link.id}>
                <CardListItem link={link} />
              </li>
            ))}
        </ul>
      )}
    </>
  );
}

export default CardList;
