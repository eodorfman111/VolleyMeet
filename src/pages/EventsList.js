import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import '../styles/EventsList.css';
const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventData);
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-list-container">
      <h1>Upcoming Events</h1>
      <div className="events-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.icon} alt="Volleyball Icon" className="event-icon" />
            <div className="event-details">
              <img src={`/static/${event.gender}.png`} alt="Gender Icon" className="gender-icon" />
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date-time">
                <strong>Date:</strong> {event.date} <br />
                <strong>Time:</strong> {event.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
