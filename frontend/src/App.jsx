import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import SkillsAndInternships from './pages/SkillsAndInternships';
import AboutUs from './pages/AboutUs';
import JoinCommunityModal from './components/JoinCommunityModal';
import ApplyModal from './components/ApplyModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const handleApplyInternship = (internship) => {
    setSelectedInternship(internship);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface-container-lowest text-on-surface font-body-md">
        <Header onOpenJoinModal={() => setIsJoinModalOpen(true)} />
        
        <main className="flex-1 pt-16">
          <Routes>
            <Route path="/" element={<Home onOpenJoinModal={() => setIsJoinModalOpen(true)} />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<CareerDetail />} />
            <Route 
              path="/skills-and-internships" 
              element={<SkillsAndInternships onApplyInternship={handleApplyInternship} />} 
            />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer onOpenJoinModal={() => setIsJoinModalOpen(true)} />

        {/* Modals */}
        <JoinCommunityModal 
          isOpen={isJoinModalOpen} 
          onClose={() => setIsJoinModalOpen(false)} 
        />

        <ApplyModal 
          isOpen={Boolean(selectedInternship)} 
          onClose={() => setSelectedInternship(null)} 
          internship={selectedInternship}
        />
      </div>
    </Router>
  );
}
