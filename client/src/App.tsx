import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Checker from './pages/Checker';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import Features from './pages/Features';
import Pricing from './pages/Pricing';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/checker" element={<Checker />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;