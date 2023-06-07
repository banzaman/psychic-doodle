// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="logo">
            <img src='../src/assets/logo.png' alt="Logo" />
          </div>
          <nav className="navbar">
            <a className="navbar-item" href="#about">About</a>
            <a className="navbar-item" href="#projects">Projects</a>
            <a className="navbar-item" href="#contact">Contact</a>
            <a className="navbar-item" href="#resume">Resume</a>
          </nav>
        </div>
      </header>
      <About />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
