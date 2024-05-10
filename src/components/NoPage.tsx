import "./NoPage.css";
interface NoPageProps {
  text: string;
}
const NoPage: React.FC<NoPageProps> = ({ text }) => {
  return <div className="notFoundPage">{text}</div>;
};

export default NoPage;
