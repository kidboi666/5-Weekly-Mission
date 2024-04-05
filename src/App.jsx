import './App.css';
import Shared from './routes/Shared.jsx';
import Folder from './routes/Folder.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/shared" element={<Shared />} />
        <Route path="/folder" element={<Folder />} />
      </Routes>
    </>
  );
}

export default App;
