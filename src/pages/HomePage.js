import Map from '../components/Map';
import EventForm from '../components/EventForm';
import '../styles/HomePage.css';

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState({ lat: 0, lng: 0 });
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh((prev) => !prev); 
  };

  return (
    <div className="homepage-container">
      <h1>Welcome to Volleymeet!</h1>
      <p className="sub-heading">To get started, set a pin on the map below and click Create Event!</p>
      <div className="content-container">
        <EventForm selectedLocation={selectedLocation} triggerRefresh={triggerRefresh} />
        <div className="map-container"> {}
          <Map 
            onLocationSelect={setSelectedLocation} 
            selectedLocation={selectedLocation} 
            eventType={refresh ? 'refresh' : 'default'} 
            refresh={refresh} 
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
