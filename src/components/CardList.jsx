import CardListItem from "./CardListItem";

function CardList({ links }) {
  return (
    <ul className="CardLinkList">
      {links.map((link) => (
        <li key={link.id}>
          <CardListItem link={link} />
        </li>
      ))}
    </ul>
  );
}

export default CardList;
