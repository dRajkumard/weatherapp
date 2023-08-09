import React, { useState } from "react";
import { Button, Card, Input, Space } from "antd";
import {  fetchWeatherDatabylocation, fetchWeatherDatabyname } from "../../components/apicall";
import "./index.css";
import { useNavigate,Link } from "react-router-dom"; 
const Home = () => {
  const navigate = useNavigate(); 
  const { Search } = Input;

const onSearch = async (value) => {
  try {
    const data = await fetchWeatherDatabyname(value);
    console.log("API Data:", data); // Log the API data
 
    if (data) {
      navigate("/weather", { state: { data } });
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};


const toggleGetGeolocation = () => {
navigator.geolocation.getCurrentPosition(
// GetgeoLocation

async(position) => {
  console.log("pos",position);
// Capture user's geolocation
const { latitude, longitude } = position.coords;
const data = await fetchWeatherDatabylocation(latitude,longitude);
console.log("lat",data);
if (data) {
  navigate("/weather", { state: { data } });
}

},
(error) => {
console.error("Error getting geolocation:", error);
}
);
};

  return (
    <div className="home">
      <div className="row justify-content-center align-items-center h-100">
       
          <Card
            title="Weather App"
            bordered={false}
            className="card-title"
            style={{ width: 300 }}
          >
         
            <div className="text-center">
           
              <Search
                placeholder="Enter city name"
                onSearch={onSearch}
                // style={{
                //   width: 300,
                // }}
              />
              {/* </Space> */}
            </div>
            <div className="horizontal-line-container">
              <hr className="w-100" />
              <div className="horizontal-line-text">or</div>
            </div>
            <div className="text-center">
            {/* <Link
                to={{
                  pathname: "/weather",
                  state: { weatherData }, // Pass weatherData as state
                }}
              > */}
                <Button type="primary" className="location_button" onClick={toggleGetGeolocation}>
                  Get Device Location
                </Button>
              {/* </Link>          */}
                 </div>
          </Card>
        </div>
    
    </div>
  );
};

export default Home;
