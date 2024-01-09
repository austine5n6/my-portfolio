import React from 'react';
import Home from './components/Home';
import Upload from './components/Upload';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import About from './components/About';
import Url from './components/Url';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dataset" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/urlcheck" element={<Url />} />
      </Routes>

      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
