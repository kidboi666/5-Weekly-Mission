import Card from "./Card";
import "./CardsBox.css";
const CardsBox = ({ folderUser }) => {
  const linkDatas = folderUser.folder?.links;
  if (!linkDatas) return;
  return (
    <div className='CardsBox'>
      {linkDatas.map((data) => {
        return <Card key={data.id} data={data} />;
      })}
    </div>
  );
};
export default CardsBox;
