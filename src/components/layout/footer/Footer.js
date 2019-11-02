import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer id='foot'>
      <ul className='foot-list py-1'>
        <li>Copyright &copy;</li>
        <li>
          <a
            href='https://gist.githubusercontent.com/vic30004/f2db9ef8923eb4a5821258b240843390/raw/4d78ee18a2a0eed79262628b935da78e71a99900/Memory-game.json'
            target='_blank'
          >
            Gist
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
