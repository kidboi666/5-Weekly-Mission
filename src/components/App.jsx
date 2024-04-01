import Footer from './Footer/Footer';
import Header from './Header/Header';
import '../assets/css/reset.css';
export default function App({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
