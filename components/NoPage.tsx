import styles from "./NoPage.module.css";
interface NoPageProps {
  text: string;
}
const NoPage: React.FC<NoPageProps> = ({ text }) => {
  return <div className={styles.notFoundPage}>{text}</div>;
};

export default NoPage;
