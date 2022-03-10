import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cosmetic from './pages/cosmetics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cosmetic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
