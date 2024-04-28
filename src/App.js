import Header from "./components/header";
import FolderTitle from "./components/foldertitle";
import MainSection from "./components/SharedPage/mainsection";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <div className="PageMain">
        <FolderTitle />
        <MainSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
