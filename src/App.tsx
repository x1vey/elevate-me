import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Examples from './pages/Examples';
import Services from './pages/Services';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Adminpannel from './pages/Adminpannel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/adminpannel" element={<Adminpannel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;