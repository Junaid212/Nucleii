import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Results from './pages/Results';
import Media from './pages/Media';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/results" element={<Results />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
