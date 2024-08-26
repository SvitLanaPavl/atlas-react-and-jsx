import React from 'react';
import day from '../assets/day.svg';
import evening from '../assets/evening.svg';
import night from '../assets/night.svg';


const Greeting = () => {
  const now = new Date();
  const hours = now.getHours();
  let time;

  if (hours >= 6 && hours < 12) {
    time = 'morning';
  } else if (hours >= 12 && hours < 17) {
    time = 'day';
  } else if (hours >= 17 && hours < 21) {
    time = 'evening';
  } else {
    time = 'night';
  }

  let content;

  switch (time) {
    case 'morning':
      content = <><img src={day}/> Good morning!</>;
      break;
    case 'day':
      content = <><img src={day} /> Good afternoon!</>;
      break;
    case 'evening':
      content = <><img src= {evening}/> Good evening!</>;
      break;
    case 'night':
      content = <><img src={night}/> Good night!</>;
      break;
    default:
      content = <><img src={day}/> Good day!</>
  }
  return (
    <h1 className='greeting'>{content}</h1>
  )
}

export default Greeting