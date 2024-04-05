import './App.css';
import Shared from './routes/Shared.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/shared" element={<Shared />} />
      </Routes>
    </>
  );
}

export default App;
