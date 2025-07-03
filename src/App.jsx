import WeatherPage from "./pages/WeatherPage";
import React, {useState} from 'react';

export default function App() {

  const [city, setCity] = useState('');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    setQuery(city.trim());
  };

  return (
    <div className="app">
      <h1>Live Weather App</h1>
      <input 
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>
      {query && <WeatherPage city={query} />}
    </div>
  );
}