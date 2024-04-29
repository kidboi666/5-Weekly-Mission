import "./CardList.css";
import CardListItem from "./CardListItem";

function CardList({ links, folders }) {
  return (
    <ul className="CardLinkList">
      {links &&
        links.map((link) => (
          <li key={link.id}>
            <CardListItem folders={folders} link={link} />
          </li>
        ))}
    </ul>
  );
}

export default CardList;
