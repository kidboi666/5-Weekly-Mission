import styles from "./Header.module.css";
import { Nav } from "../Nav/Nav";

export const Header = ({ profile, isSticky }) => {
  return (
    <div className={styles.wrapHeader}>
      <Nav profile={profile} />
    </div>
  );
};
