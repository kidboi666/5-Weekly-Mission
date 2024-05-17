import { LinkItem } from "../ListItem";
import { useSearch } from "hooks";
import styles from "./Linklist.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export function LinkList({ searchKeyWord, links, createdtime, image }) {
  const filteredLinks = useSearch(searchKeyWord, links);

  return (
    <div className={cx("Link-container")}>
      <ul className={cx("LinkList")}>
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
