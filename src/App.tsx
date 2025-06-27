import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col w-full">
        <div className="w-full">
          <Navbar />
        </div>
        <main className="flex-grow w-full py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </main>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
