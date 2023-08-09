import axios from "axios";

const API_KEY = "7d22bf63bd8b5eb2952a4a4af37975ad";

const fetchWeatherDatabyname = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
const fetchWeatherDatabylocation = async (lat,lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};


export { fetchWeatherDatabyname,fetchWeatherDatabylocation };
