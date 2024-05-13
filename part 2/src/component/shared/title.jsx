import "./title.css";
import { useContext } from "react";
import { folderContext } from "./sharedMain";

const Title = () => {
  const data = useContext(folderContext);

  const name = data.title?.name;
  const profileImage = data.title?.profileImageSource;
  const folderName = data.folderName;

  return (
    <section className="my-bookmark">
      <div className="my-bookmark-title">
        <img className="profileImage" src={profileImage}></img>
        <h6 className="titleName">{name}</h6>
        <div className="folderName">{folderName}</div>
      </div>
    </section>
  );
};

export default Title;
