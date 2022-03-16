import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import Layout from './components/Layout';
import CosmeticDetail from './pages/:cosmeticId';
import Cosmetic from './pages/cosmetics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/cosmetic" />} />
          <Route path="cosmetic" element={<Outlet />}>
            <Route path="" element={<Cosmetic />} />
            <Route path=":cosmeticId" element={<CosmeticDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
