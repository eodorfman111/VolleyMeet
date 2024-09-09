// src/pages/CreateEventPage.js
import React, { useState } from 'react';
import Geocode from 'react-geocode';
import { db } from '../services/firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore';

const CreateEventPage = () => {
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('beach');
  const [gender, setGender] = useState('coed');
  const [errorMessage, setErrorMessage] = useState('');


  Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Geocode the address
      const response = await Geocode.fromAddress(address);
      const { lat, lng } = response.results[0].geometry.location;

      // Add the event to Firestore
      await addDoc(collection(db, 'events'), {
        title,
        location: { lat, lng },
        description,
        type,
        gender,
        icon: `/static/${type}Ball.png`, 
      });

      // Clear form fields
      setTitle('');
      setAddress('');
      setDescription('');
      setType('beach');
      setGender('coed');
    } catch (error) {
      console.error('Error creating event:', error);
      setErrorMessage('Failed to create event. Please try again.');
    }
  };

  return (
    <div>
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Event Title"
          required
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Event Address"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Event Description"
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="beach">Beach Volleyball</option>
          <option value="indoor">Indoor Volleyball</option>
          <option value="grass">Grass Volleyball</option>
        </select>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="coed">Coed</option>
          <option value="mens">Men's</option>
          <option value="womens">Women's</option>
        </select>
        <button type="submit">Create Event</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default CreateEventPage;
