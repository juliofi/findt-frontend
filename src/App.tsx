import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Resultados from './pages/Resultados'; // ✅ importa a nova página

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/resultados" element={<Resultados />} /> {/* ✅ nova rota adicionada */}
      </Routes>
    </Router>
  );
}

export default App;
