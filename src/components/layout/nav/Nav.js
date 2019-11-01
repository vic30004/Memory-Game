import React from 'react';
import './Nav.css';

export default function Nav() {
 

  return (
      <nav  id="navBar">
        <div className='logo my-1-side'><h1>CN Memory-Game</h1></div>
        <ul className="nav-list my-1-side">
            <li>Score:0</li>
            <li>High Score:0</li>
        </ul>
      </nav>
  );
}
