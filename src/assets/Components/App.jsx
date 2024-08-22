import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Content from './Content';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="app min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
