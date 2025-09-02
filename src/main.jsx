import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './main.css'
import Gallery from './Gallery'
import About from './About'
import Results from './Results'
import Sponsor from './Sponsor'
import Snake from './PingPong'

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <Link to="/pingpong">
          <img src="/mainlogo.png" alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>HOME</Link>
        <Link to="/about" className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
        <Link to="/results" className={`nav-item ${location.pathname === '/results' ? 'active' : ''}`}>RESULTS</Link>
        <Link to="/gallery" className={`nav-item ${location.pathname === '/gallery' ? 'active' : ''}`}>GALLERY</Link>
        <Link to="/sponsor" className={`nav-item ${location.pathname === '/sponsor' ? 'active' : ''}`}>SPONSOR</Link>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      
      <div className="main-content">
        <div className="hackathon-section">
          <img src="/hackathon.png" alt="1st HACK@THON" className="hackathon-logo" />
        </div>
        
        <div className="sponsor-logos">
          <img src="/sponsor_logo.png" alt="Sponsors" className="sponsors" />
        </div>
      </div>
      
      <footer className="main-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-title">HACK@THON</div>
          </div>
          <div className="footer-right">
            <div className="footer-copyright">© 2025 A.C.T.(KE). All rights reserved.</div>
            <div className="footer-developed">
              Developed by <a href="https://github.com/UntameDuck" target="_blank" rel="noopener noreferrer">UntameDuck</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/results" element={<Results />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/pingpong" element={<Snake />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
