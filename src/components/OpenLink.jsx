import React from 'react';
import open from '../assets/open.svg';

const OpenLink = ( {link} ) => {
  function handleClick() {
    
  }
  return (
    <a href={link} target='_blank' rel='noopener noreferrer'>
      <img src={open} alt='open link'/>
    </a>
  );
};

export default OpenLink