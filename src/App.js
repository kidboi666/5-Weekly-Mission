import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Share from './Share';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Share />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
