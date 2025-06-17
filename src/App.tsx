import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Component to handle scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    // Check if there's a hash in the URL for anchor navigation
    const hash = window.location.hash;
    
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Normal scroll to top for regular navigation
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-white">
        <div className="fixed inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 opacity-95"></div>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,255,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.1),transparent_50%),radial-gradient(circle_at_40%_40%,rgba(0,255,136,0.1),transparent_50%)]"></div>
        <div className="relative z-10">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;