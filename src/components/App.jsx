import PropTypes from 'prop-types';
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

App.propTypes = {
  children: PropTypes.node.isRequired,
};
