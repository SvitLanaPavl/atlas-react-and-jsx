import React from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const SocialLinks = () => {
  return (
    <div className='social-links'>
      <a href='https://www.linkedin.com/in/svitlanapavlovska/' target='_blank'><img src={linkedin}/></a>
      <a href='https://github.com/SvitLanaPavl' target='_blank'><img src={github}/></a>
    </div>
  )
}

export default SocialLinks