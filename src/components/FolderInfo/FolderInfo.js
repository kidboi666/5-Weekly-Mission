export default function Profile({ ownerName, folderName, profileImgSource }) {
  console.log(ownerName);
  return (
    <div>
      <div>
        <img src={profileImgSource} />
        <span>@{ownerName}</span>
      </div>

      <span>{folderName}</span>
    </div>
  );
}
