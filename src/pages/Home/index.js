import React, { useState } from "react";
import { Card, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { fetchWeatherDatabyname, fetchWeatherDatabylocation } from "../../components/apicall";
import "./index.css";

const Home = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null); 
console.log("err",error)
  const onSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await fetchWeatherDatabyname(inputValue);

        if (data) {
          navigate("/weather", { state: { data } });
        }
      } catch (error) {
      setError(error.message); 
      }
    }
  };

  const toggleGetGeolocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const data = await fetchWeatherDatabylocation(latitude, longitude);
          if (data) {
            navigate("/weather", { state: { data } });
          }
        } catch (error) {
          setError(error.message); 
          }
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        setError(error.message);  
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
            <Input
              className="searchfield"
              placeholder="Enter city name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={onSearch}
            />
          </div>
          {error && <div className="error-message">{error}</div>}

          <div className="horizontal-line-container">
            <hr className="w-100" />
            <div className="horizontal-line-text">or</div>
          </div>
          <div className="text-center">
            <Button
              type="primary"
              className="location_button"
              onClick={toggleGetGeolocation}
            >
              Get Device Location
            </Button>
          </div>
        
        </Card>
      </div>
    </div>
  );
};

export default Home;
