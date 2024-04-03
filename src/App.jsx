import "./styles/form.css";
import "./styles/pages/main/main.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
