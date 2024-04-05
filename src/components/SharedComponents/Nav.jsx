import '../../styles/Nav.css';
import logo from '../../assets/logo.svg';
import useFetch from '../hooks/useFetch';

function Nav() {
  const { data, isLoading, error } = useFetch('api/sample/user');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <nav>
      <div className="gnb">
        <a>
          <img className="logo" src={logo} alt="메인페이지의 로고" />
        </a>
        {data ? (
          <div className="user-info">
            <img src={data.profileImageSource} alt="사용자의 프로필 사진" />
            <span>{data.email}</span>
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
