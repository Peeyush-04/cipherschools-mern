import React, { useEffect, useState } from 'react';

export default function WeatherPage({ city }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            setError('');
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
                );
                if (!res.ok) throw new Error('City not found');
                
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [city]);

    if(loading) return <p>Loading...</p>
    if(error) return <p style={{ color: 'red' }}>{error}</p>
    if(!data) return null;

    return (
        <div className="weather-page">
            <h2>{data.name}, {data.sys.country}</h2>
            <p>🌡️ {data.main.temp}°C</p>
            <p>☁️ {data.weather[0].description}</p>
            <p>💧 Humidity: {data.main.humidity}%</p>
            <p>🌬️ Wind: {data.wind.speed} m/s</p>
        </div>
    );
}