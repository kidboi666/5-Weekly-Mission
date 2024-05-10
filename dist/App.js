import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import Shared from "./pages/Shared";
import Folder from "./pages/Folder";
function App() {
    return (_jsx(_Fragment, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/shared", element: _jsx(Shared, {}) }), _jsx(Route, { path: "/", element: _jsx(Folder, {}) })] }) }) }));
}
export default App;
