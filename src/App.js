import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SignIn from './pages/SignIn';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
