import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AI from './pages/AI';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/ai" element={<PageWrapper><AI /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary flex flex-col">
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
