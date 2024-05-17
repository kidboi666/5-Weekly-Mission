import { useEffect, useState } from 'react';
import { getSampleUser, getFolderInfo, getFolderList } from '@/api/api';
import SharedPage from './shared';
import FolderPage from '../pages/FolderPage';
import Link from 'next/link';
import queryString from 'query-string';

function useUser() {
  const [userInfo, setUserInfo] = useState({ email: '', imgUrl: '' });
  useEffect(() => {
    (async function loadData() {
      const result = await getSampleUser();
      if (!result) return;

      const { email, profileImageSource: imgUrl } = result;
      setUserInfo({ email, imgUrl });
    })();
  }, []);
  return { userInfo };
}

function useFolder() {
  const [folderInfo, setFolderInfo] = useState({});
  useEffect(() => {
    (async function loadData() {
      const result = await getFolderInfo();
      if (!result) return;

      const { folder } = result;
      setFolderInfo(folder);
    })();
  }, []);
  return { folderInfo };
}

function useFolderList() {
  const [folderList, setFolderList] = useState({});
  useEffect(() => {
    (async function loadData() {
      const result = await getFolderList(1);
      if (!result) return;

      const { data } = result;
      setFolderList({ data });
    })();
  }, []);
  return { folderList };
}

function App() {
  const { userInfo } = useUser();
  const { folderInfo } = useFolder();
  const { folderList } = useFolderList();

  const queryParam = queryString.stringify({ userInfo, folderInfo });

  return (
    <>
      {/* <Link href={`/shared?${queryParam}`} /> */}
      {/* <Link href="/FolderPage" /> */}
      <Link href="signin" />
    </>
  );
}

export default App;
