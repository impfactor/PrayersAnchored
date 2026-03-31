import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { LegalDocuments } from './components/LegalDocuments';
import ScrollToHash from './components/ScrollToHash';
import LandingPage from './components/LandingPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen font-sans selection:bg-brand-blue/20 selection:text-brand-blue">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/legal" element={<LegalDocuments />} />
            <Route path="/legal/:appKey" element={<LegalDocuments />} />
            <Route path="/legal/:appKey/:sectionId" element={<LegalDocuments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
