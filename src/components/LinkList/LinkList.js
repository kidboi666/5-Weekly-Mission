import { LinkItem } from "../ListItem";
import { useSearch } from "hooks";
import "./Linklist.css";

export function LinkList({ searchKeyWord, links, createdtime, image }) {
  const filteredLinks = useSearch(searchKeyWord, links);

  return (
    <div className="Link-container">
      <ul className="LinkList">
        {filteredLinks.map((link) => {
          return (
            <li key={link.id}>
              <LinkItem
                url={link.url}
                createdAt={link[createdtime]}
                imageSource={link[image]}
                description={link.description}
                title={link.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
