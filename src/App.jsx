import { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './index.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
        <div className="logo">
          <img src="logo.png" alt="Logo" width="40" height="40" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </div>
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
    </Router>
  );
}

export default App;
