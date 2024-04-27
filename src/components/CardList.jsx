import "./CardList.css";
import CardListItem from "./CardListItem";

function CardList({ links }) {
  return (
    <ul className="CardLinkList">
      {links &&
        links.map((link) => (
          <li key={link.id}>
            <CardListItem link={link} />
          </li>
        ))}
    </ul>
  );
}

export default CardList;
