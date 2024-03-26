import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <header>
      <h1>
        <a href='#'>
          <img src={logo} alt='Linkbrary' class='sign-logo' />
        </a>
        <span>Linkbrary</span>
      </h1>
      <div>Profile</div>
    </header>
  );
}
