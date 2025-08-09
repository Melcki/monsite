import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        {/* Ton contenu principal ici */}
        <div style={{ paddingTop: '36px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
