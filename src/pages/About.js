import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Volleymeet</h1>
      <p>
        Volleymeet is a platform designed for volleyball players of all skill levels to connect, create, and join volleyball events in their local communities. Whether you're looking to join a friendly beach volleyball game or organize a competitive indoor tournament, Volleymeet provides the tools to bring the volleyball community together.
      </p>
      <p>
        This project was developed by Leo Dorfman as a passion project. Combining a love for both technology and volleyball, Leo set out to create a platform where enthusiasts can easily find or organize volleyball games. Volleymeet utilizes the power of React for the front-end, Google Maps API for the interactive map functionality, and Firebase to store event data securely.
      </p>
      <p>
        The project began as a small idea, but quickly grew into something larger. The platform continues to evolve with new features and improvements, all while maintaining a simple and easy-to-use interface for volleyball lovers everywhere. Whether you're a beginner or an advanced player, Volleymeet has something for everyone.
      </p>
    </div>
  );
};

export default About;
