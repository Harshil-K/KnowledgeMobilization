import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TeamPage  from './pages/TeamPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/team" element={<TeamPage />} />
    </Routes>
  );
}

export default App;

