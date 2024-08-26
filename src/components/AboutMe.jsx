import React from 'react';
import photo from '../assets/photo.jpeg';

const AboutMe = () => {
  return (
    <div className='about-me'>
      <img src={photo} alt='author' />
      <p>My name is Svitlana Pavlovska, and I specialize in Full-Stack Web Development.
        Currently, I am in my fifth trimester at Atlas School. 
        My favorite programming language is JavaScript, and I particularly enjoy doing frontend development with React and various frameworks.
        After completing my studies, I hope to become a skilled software engineer, working across both frontend and backend development while continuously growing my knowledge of new technologies. 
        Outside of school, I love spending time with my family, traveling, attending my kids' swim practices, cooking, and gardening.</p>
    </div>
  )
}

export default AboutMe