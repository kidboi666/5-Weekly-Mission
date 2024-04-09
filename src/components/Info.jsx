import "./Info.css";
const Info = ({ folderUser }) => {
  if (!folderUser || !folderUser.folder) {
    return null;
  }
  const { name } = folderUser.folder;
  if (!folderUser.folder.owner) {
    return null;
  }
  const { name: ownerName, profileImageSource } = folderUser.folder.owner;
  return (
    <div className="Info">
      <img src={profileImageSource} alt="profileImageSource" />
      <p>@{ownerName}</p>
      <h1>{name}</h1>
    </div>
  );
};
export default Info;
