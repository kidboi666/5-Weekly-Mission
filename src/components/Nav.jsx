import '../styles/Nav.css';
import logo from '../assets/logo.svg';
import fetchData from './apis/GetApi.jsx';
import { useState, useEffect } from 'react';

function Nav() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData('api/sample/user')
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error(error));
  }, []);

  return (
    <nav>
      <div className="gnb">
        <a>
          <img className="logo" src={logo} />
        </a>
        {data ? (
          <div className="user-info">
            <img src={data?.profileImageSource} />
            <span>{data?.email}</span>
          </div>
        ) : (
          <a className="cta cta-short" href="signin.html">
            <span>로그인</span>
          </a>
        )}
      </div>
    </nav>
  );
}

export default Nav;
