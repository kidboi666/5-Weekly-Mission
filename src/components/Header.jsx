import { useState, useEffect } from 'react';
import '../styles/Header.css';
import fetchData from './apis/GetApi.jsx';

function Header() {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData('api/sample/folder')
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <header className="Header">
      <img src={data.folder.owner.profileImageSource} alt="Header Logo" className="Header__img" />
      <p className="Header__text">{data.folder.owner.name}</p>
      <h2 className="Header__title">{data.folder.name}</h2>
    </header>
  );
}

export default Header;
