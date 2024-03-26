import { useEffect, useState } from 'react';
import { getFolderInfo } from '../../utils/api';
import FolderInfo from '../FolderInfo/FolderInfo';

export default function Folder() {
  const [ownerInfo, setOwnerInfo] = useState({});
  const [folderName, setFolderName] = useState('');
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    let result;
    try {
      result = await getFolderInfo();
    } catch (error) {}

    const { name, owner, links } = result;
    setFolderName(name);
    setItems(links);
    setOwnerInfo(owner);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <FolderInfo
        ownerName={ownerInfo.name}
        profileImgSource={ownerInfo.profileImageSource}
        folderName={folderName}
      />
    </>
  );
}
