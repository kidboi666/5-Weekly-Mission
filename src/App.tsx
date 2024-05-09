import { Outlet } from 'react-router-dom';
import GlobalStyle from './assets/styles/global.styled';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
