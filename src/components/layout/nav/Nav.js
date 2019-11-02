import React, {useContext} from 'react';
import './Nav.css';
import ShowsContext from '../../context/shows/ShowsContext';

export default function Nav(props) {
  const showsContext = useContext(ShowsContext);
  const { score, highScore} = showsContext;

  return (
      <nav  id="navBar">
        <div className='logo my-1-side'><h1>CN Memory-Game</h1></div>
        <ul className="nav-list my-1-side">
            <li>Score:{props.score}</li>
            <li>High Score:{props.highScore}</li>
        </ul>
      </nav>
  );
}
