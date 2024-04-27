export default function AddToFolderModal({
  folders,
  headerText,
  subHeaderText,
  buttonText,
}) {
  const curFolders = folders.slice(1);
  return (
    <div>
      <ul>
        {curFolders.map((folder) => (
          <li>
            <div>
              <span>{folder.name}</span>
              <span>{folder.link.count}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
