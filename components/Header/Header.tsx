import styles from "./Header.module.css";
import { Nav } from "../Nav/Nav";
import { ProfileData } from "@/types";

export const Header = ({
  profile,
  isSticky,
}: {
  profile?: ProfileData | null;
  isSticky: boolean;
}) => {
  return (
    <div className={styles.wrapHeader}>
      <Nav profile={profile} />
    </div>
  );
};
