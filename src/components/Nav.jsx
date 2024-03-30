import '../styles/Nav.css';
import logo from '../assets/logo.svg';
import useFetch from './hooks/useFetch';

function Nav() {
  const [data] = useFetch('api/sample/user');

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
