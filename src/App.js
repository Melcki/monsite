import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

// 🔹 Composant qui gère le loader et les routes
function AppContent() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Commence la barre au changement de page
    ref.current.continuousStart();

    // Simule un chargement et termine après 800ms
    const timer = setTimeout(() => {
      ref.current.complete();
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Loader en haut */}
      <LoadingBar color="#3498db" height={4} ref={ref} />

      <Header />
      <main>
        <div style={{ paddingTop: '36px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

// 🔹 App avec Router
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
