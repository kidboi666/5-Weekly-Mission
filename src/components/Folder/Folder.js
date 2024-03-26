import { useState } from 'react';
import { getFolderInfo } from '../../utils/api';

export default function Folder() {
  const [ownerName, setOwnerName] = useState('');
  const [ownerInfo, setOwnerInfo] = useState({});
  const [folderName, setFolderName] = useState('');
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    let result;
    try {
      result = await getFolderInfo();
    } catch (error) {}

    const { name, owner, links } = result;
  };
}
