import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';

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
          <Route path="/projects" element={<h1>Projects Page</h1>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      </main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
