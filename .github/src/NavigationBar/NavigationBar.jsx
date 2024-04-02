import "./NavigationBar.css";

export const NavigationBar = ({ profile }) => {
 
  const userInfo = profile
    ? <div>{profile.email}</div>
    : <div>{'로그인'}</div>;

  return (
    <nav className="NavigationBar">
      <div className="NavigationBar-items">
        <a href={ROUTE.랜딩}>
          <img className="NavigationBar-logo" src={LOGO_IMAGE} alt="Linkbrary 서비스 로고" />
        </a>
        {userInfo}
      </div>
    </nav>
  );
};
