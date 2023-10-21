import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import ProjectDetail from './ProjectDetails';
import AboutMe from './Aboutme';
import './App.css';

function App() {
  return (
    
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutMe />}/>
          <Route path="/project/:id" element={<ProjectDetail />}/>
          <Route path="/"element={<Home />}/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
