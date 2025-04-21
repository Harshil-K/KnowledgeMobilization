import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TeamPage  from './pages/TeamPage';
import GeneralResources from './pages/GeneralResources';
import LegalResources from './pages/LegalResources';
import FinancialResources from './pages/FinancialResources';
import RAFormPage from './pages/RAFormPage';
import Guidelines from './pages/Guidelines';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/legalresources" element={<LegalResources/>} />
      <Route path="/RAForm" element={<RAFormPage/>} />
      <Route path="/generalresources" element={<GeneralResources/>} />
      <Route path="/financialresources" element={<FinancialResources/>} />
      <Route path="/guidelines" element={<Guidelines/>} />
    </Routes>
  );
}

export default App;

