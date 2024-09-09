import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useNavigate } from 'react-router-dom';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const defaultCenter = {
  lat: 39.8283,
  lng: -98.5795,
};

const Map = ({ onLocationSelect, selectedLocation, eventType, refresh }) => {
  const [events, setEvents] = useState([]);
  const [center, setCenter] = useState(defaultCenter); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, 'events'));
      const eventData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(eventData);
    };

    fetchEvents();
  }, [refresh]);

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    
    onLocationSelect({ lat, lng });
  };

  const handleMarkerClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

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
    return {
      ballIcon,
      genderIcon,
    };
  };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center} 
        zoom={4}
        onClick={handleMapClick}
      >
        {events.map((event) => {
          const { ballIcon, genderIcon } = getIcon(event.type, event.gender);

          return (
            <React.Fragment key={event.id}>
              {/* Volleyball Marker */}
              <Marker
                position={event.location}
                icon={{
                  url: ballIcon,
                  scaledSize: { width: 50, height: 50 },
                  anchor: new window.google.maps.Point(25, 50), 
                }}
                title={event.title}
                onClick={() => handleMarkerClick(event.id)}
              />

              {}
              <Marker
                position={event.location} 
                icon={{
                  url: genderIcon,
                  scaledSize: { width: 30, height: 30 }, 
                  anchor: new window.google.maps.Point(15, 2), 
                }}
              />
            </React.Fragment>
          );
        })}

        {selectedLocation && (
          <Marker
            position={selectedLocation}
            icon={{
              url: '/static/selectedMarker.png',
              scaledSize: { width: 30, height: 30 },
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
