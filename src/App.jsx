import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summary from './components/summary/Summary';
import Education from './components/education/Education';
import Navbar from './components/navbar/Navbar';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
