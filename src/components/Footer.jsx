import React from 'react';
import links from '../assets/links.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <ul>
        {links.map(link => (
          <li><a href={link.link} target='_blank' rel='noopener noreferrer' alt='link'>
            {link.label}
            </a></li>
        ))}
      </ul>
      <p>© {currentYear} Atlas School</p>
    </footer>
  )
}

export default Footer