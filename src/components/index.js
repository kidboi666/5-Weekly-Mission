import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SharedPage from '../pages/SharedPage';
import FolderPage from '../pages/FolderPage';
/*테블릿 1124 이상 모바일 최소여백 32       테블릿 768~1199 모바일 375 ~767    */
function Main() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/shared", element: _jsx(SharedPage, {}) }), _jsx(Route, { path: "/folder", element: _jsx(FolderPage, {}) })] }) }));
}
export default Main;
