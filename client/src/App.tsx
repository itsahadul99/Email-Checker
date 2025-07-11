import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Checker from './pages/Checker';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/checker" element={<Checker />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;