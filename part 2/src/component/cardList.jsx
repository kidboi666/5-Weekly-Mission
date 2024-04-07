import "./cardList.css";
import Card from "./card";
import { useContext } from "react";
import { folderContext } from "./main";

const CardList = () => {
  const data = useContext(folderContext);
  const links = data?.links;

  // for (let i in links) {
  //   const link = links[i];
  //   <Card
  //     id={link.id}
  //     date={link.createdAt}
  //     title={link.title}
  //     url={link.url}
  //     img={link.imageSource}
  //   />;
  // }

  const Cards =
    links &&
    links.map((link) => (
      <Card
        key={link.id}
        date={link.createdAt}
        title={link.description}
        url={link.url}
        img={link.imageSource}
      />
    ));

  return <section className="card-list">{Cards}</section>;
};

export default CardList;
