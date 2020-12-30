
import React from 'react';
import './header.css'

export default function Header() {
  return (
    <div className="header">
    <nav className="header__nav">
      <ul>
        <li>
          <a href="#" className="active">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Experiences</a>
        </li><li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
    </div>
  );
}

