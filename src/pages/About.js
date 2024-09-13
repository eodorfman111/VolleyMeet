import React from 'react';
import '../styles/About.css'; 

const About = () => {
  return (
    <div className="about-container">
      <h1>About Volleymeet</h1>
      <p>
        Volleymeet is a platform designed for volleyball enthusiasts to easily create and join volleyball events. It was developed to simplify the process of connecting players, organizing games, and bringing the volleyball community closer together.
      </p>
      <p>
        This web application was built using React for the front-end, providing a fast and interactive user experience. For managing and storing event data, Volleymeet integrates with Firebase Firestore, offering real-time database updates, secure authentication, and data storage.
      </p>
      <p>
        The platform also utilizes the Google Maps API, which enables users to select locations for events visually on the map, making it easier to set up games at their preferred courts. To handle hosting and continuous deployment, Volleymeet is hosted on Netlify, ensuring that new updates are seamlessly deployed, and the platform remains stable.
      </p>
      <p>
        By using this modern stack of technologies, Volleymeet provides a robust, user-friendly experience that meets the needs of the volleyball community.
      </p>
    </div>
  );
};

export default About;
