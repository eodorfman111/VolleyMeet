import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EventPage from './pages/EventPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/event/:id" element={<EventPage />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
