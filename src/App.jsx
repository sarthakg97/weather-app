import { useState } from 'react';
import SearchBox from './components/SearchBox';
import WeatherCard from './components/WeatherCard';  // WeatherCard — capital C
import './App.css';
const API_KEY = import.meta.env.API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  async function getWeather(city) {
    setLoading(true);
    setError(false);

    try{
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      let data = await response.json();
      if(data.cod == "404"){
        setError(true);
        setWeather(null);
      }else{
        setWeather(data);
      }
    }catch(err){
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div className='container '>
            <h1>🌤️ Weather App</h1>
            <SearchBox onSearch={getWeather}/>
            {loading && <p>Loading...</p>}
            {error && <p>❌ City nahi mili!</p>}
            {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App;
