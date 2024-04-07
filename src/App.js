import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import SignIn from './pages/signIn';
import SignUp from './pages/signup';
import Shared from './pages/shared';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/shared" element={<Shared />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
