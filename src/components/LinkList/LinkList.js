import { LinkItem } from "../ListItem";
import "./Linklist.css";

export function LinkList({ links, createdtime, image }) {
  return (
    <div className="Link-container">
      <ul className="LinkList">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <LinkItem
                link={link}
                createdAt={link[createdtime]}
                imageSource={link[image]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
