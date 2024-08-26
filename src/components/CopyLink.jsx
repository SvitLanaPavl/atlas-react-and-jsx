import React from 'react';
import copy from '../assets/copy.svg';

const CopyLink = ( {link} ) => {

  const copyToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      alert('Link copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy the link', err);
    });
  };

  return (
    <img className='copy' src={copy} alt='copy link' onClick={copyToClipboard} />
  )
}

export default CopyLink