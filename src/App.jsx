import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Uniform from './pages/Uniform';
import Prayer from './pages/Prayer';
import Batika from './pages/Batika';
import Pride from './pages/Pride';
import Family from './pages/Family';
import PhotoGallery from './pages/PhotoGallery';
import Events from './pages/Events';

// New Pages for Top Header
import About from './pages/About';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';
import Admission from './pages/Admissions'; // 👈 Matches your filename 'Admissions.jsx'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#fff9db]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Sidebar Specific Routes */}
            <Route path="/school-uniform" element={<Uniform />} />
            <Route path="/school-prayer" element={<Prayer />} />
            <Route path="/shishu-batika" element={<Batika />} />
            <Route path="/pride-of-our-school" element={<Pride />} />
            <Route path="/our-family" element={<Family />} />
            <Route path="/photo-gallery" element={<PhotoGallery />} />
            <Route path="/annual-events" element={<Events />} />

            {/* Top Header Routes */}
            <Route path="/about-us" element={<About />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;