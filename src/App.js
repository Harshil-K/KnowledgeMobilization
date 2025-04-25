import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TeamPage  from './pages/TeamPage';
import GeneralResources from './pages/GeneralResources';
import LegalResources from './pages/LegalResources';
import FinancialResources from './pages/FinancialResources';
import RAFormPage from './pages/RAFormPage';
import Guidelines from './pages/Guidelines';
import FAQ from './pages/FAQ';
import MissionPage from'./pages/MissionPage';
import SurveyStatsPage from './pages/SurveyStatsPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/legalresources" element={<LegalResources/>} />
      <Route path="/RAForm" element={<RAFormPage/>} />
      <Route path="/generalresources" element={<GeneralResources/>} />
      <Route path="/financialresources" element={<FinancialResources/>} />
      <Route path="/faq" element={<FAQ/>} />
      <Route path="/survey" element={<SurveyStatsPage />} />
      <Route path="/mission" element={<MissionPage/>} />
      <Route path="/guidelines" element={<Guidelines/>} />
    </Routes>
  );
}

export default App;

