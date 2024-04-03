import Footer from './Footer/Footer';
import Header from './Header/Header';
import '../assets/css/reset.css';
import './App.css';

export default function App({ children }) {
  return (
    <>
      <Header />
      <div className="page-content">{children}</div>
      <Footer />
    </>
  );
}
