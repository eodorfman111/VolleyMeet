import React, { useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import '../styles/EventForm.css';

const EventForm = ({ selectedLocation, triggerRefresh }) => {
  const [title, setTitle] = useState('');
  const [specificLocation, setSpecificLocation] = useState('');
  const [type, setType] = useState('beach');
  const [gender, setGender] = useState('coed');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedLocation) {
      setErrorMessage('Please select a location on the map.');
      return;
    }

    try {
      // Add the event to Firestore
      await addDoc(collection(db, 'events'), {
        title,
        location: { lat: selectedLocation.lat, lng: selectedLocation.lng },
        specificLocation,
        type,
        gender,
        date: eventDate,
        time: eventTime,
        icon: `/static/${type}Ball.png`, 
      });

      
      triggerRefresh();

     
      setTitle('');
      setSpecificLocation('');
      setType('beach');
      setGender('coed');
      setEventDate('');
      setEventTime('');
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage('Failed to create event. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Title"
        required
      />
      <textarea
        value={specificLocation}
        onChange={(e) => setSpecificLocation(e.target.value)}
        placeholder="Specific Location (e.g : Court 1) "
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="beach">Beach Volleyball</option>
        <option value="indoor">Indoor Volleyball</option>
        <option value="grass">Grass Volleyball</option>
      </select>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="coed">Coed</option>
        <option value="male">Men's</option>
        <option value="female">Women's</option>
      </select>
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        required
      />
      <button type="submit">Create Event</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default EventForm;
