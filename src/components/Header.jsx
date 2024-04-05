import '../styles/Header.css';
import useFetch from './hooks/useFetch';

function Header() {
  const [data] = useFetch('api/sample/folder');

  return (
    <header className="Header">
      <img src={data?.folder.owner.profileImageSource} alt="Header Logo" className="Header__img" />
      <p className="Header__text">{data?.folder.owner.name}</p>
      <h2 className="Header__title">{data?.folder.name}</h2>
    </header>
  );
}

export default Header;
