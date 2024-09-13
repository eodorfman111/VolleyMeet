import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';
import EventPage from './pages/EventPage';
import Navbar from './components/Navbar'; 
import About from './pages/About'; 
import EventsList from './pages/EventsList'; 

function App() {
  return (
    <Router>
      <Navbar /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<EventsList />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/event/:id" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
