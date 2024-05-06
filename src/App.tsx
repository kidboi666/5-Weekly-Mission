import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Routes를 추가해야 합니다.
import Folder from "./folder";
import Shared from "./shared";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/shared' element={<Shared />} />
                <Route path='/folder' element={<Folder />} />
            </Routes>
        </Router>
    );
}

export default App;
