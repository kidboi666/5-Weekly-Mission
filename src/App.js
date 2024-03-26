import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SharedPage from "./pages/SharedPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <SharedPage />
      <Footer />
    </div>
  );
}

export default App;
