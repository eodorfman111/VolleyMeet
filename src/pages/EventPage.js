import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import '../styles/EventPage.css'; 

const EventPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchEvent = async () => {
      const docRef = doc(db, 'events', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEvent(docSnap.data());
      } else {
        console.error('No such event!');
      }
    };

    fetchEvent();
  }, [id]);

  if (!event) return <div>Loading...</div>;

  const getIcon = (type, gender) => {
    let ballIcon = '';
    switch (type) {
      case 'beach':
        ballIcon = '/static/beachBall.png';
        break;
      case 'indoor':
        ballIcon = '/static/indoorBall.png';
        break;
      case 'grass':
        ballIcon = '/static/grassBall.png';
        break;
      default:
        ballIcon = '/static/defaultIcon.png';
    }

    const genderIcon = `/static/${gender}.png`;
    return { ballIcon, genderIcon };
  };

  const { ballIcon, genderIcon } = getIcon(event.type, event.gender);

  return (
    <div className="event-page-container">
      <h2 className="event-title">{event.title}</h2>
      <div className="event-details">
        <p className="event-date"><strong>Date:</strong> {event.date}</p>
        <p className="event-time"><strong>Time:</strong> {event.time}</p>
        <p><strong>Skill Level:</strong> {event.skillLevel}</p>
        <p><strong>Specific Location:</strong> {event.specificLocation}</p>
        <p><strong>Type:</strong> {event.type} Volleyball</p>
        <p><strong>Gender:</strong> {event.gender}</p>

        {}
        <div className="event-icon">
          <img src={ballIcon} alt="Volleyball Icon" />
          <img src={genderIcon} alt={`${event.gender} icon`} />
        </div>
      </div>

      {}
      <button className="back-button" onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
};

export default EventPage;
