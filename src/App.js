import Header from "./components/Header";
import User from "./components/User";
import FolderListPage from "./pages/FolderListPage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <User />
      <FolderListPage />
      <Footer />
    </div>
  );
}

export default App;
