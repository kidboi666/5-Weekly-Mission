import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Folder from "./folder";


function HomePage() {
    return (
        <BrowserRouter>
            <Routes path="/">
                <Route path="/shared" element = {<App/>}/>      
                <Route path="/folder" element = {<Folder/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default HomePage;