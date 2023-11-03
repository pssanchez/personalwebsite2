import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function AboutMe() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </nav>
      <h1>About Me</h1>
      <p>Some information about yourself</p>
    </div>
  );
}

export default AboutMe;
