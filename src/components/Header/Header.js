import './Header.css';
import logo from '../../assets/images/logo.svg';
export default function Header() {
  return (
    <header className='main-header'>
      <h1>
        <a href='#'>
          <img src={logo} alt='Linkbrary' className='logo-img' />
        </a>
        <span className='blind'>Linkbrary</span>
      </h1>
      <div>Profile</div>
    </header>
  );
}
