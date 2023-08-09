import React, { useState } from "react";
import { Button, Card, Input, Space } from "antd";
import { fetchWeatherData } from "../../components/apicall";
import "./index.css";
import { useNavigate,Link } from "react-router-dom"; 
const Home = () => {
  const navigate = useNavigate(); 
  const { Search } = Input;
  
  const [weatherData, setWeatherData] = useState(null);
console.log("data",weatherData)
  const onSearch = async (value) => {
    const data = await fetchWeatherData(value);
    setWeatherData(data);
    if (data) {
      navigate("/weather", { state: { weatherData } });
    }
  };
  return (
    <div className="home">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-3">
          <Card
            title="Weather App"
            bordered={false}
            className="card-title"
            
          >
         
            <div className="text-center">
              {/* <Space direction="vertical"> */}
              <Search
                placeholder="Enter city name"
                onSearch={onSearch}
                style={{
                  width: 300,
                }}
              />
              {/* </Space> */}
            </div>
            <div className="horizontal-line-container">
              <hr className="w-100" />
              <div className="horizontal-line-text">or</div>
            </div>
            <div className="text-center">
            <Link
                to={{
                  pathname: "/weather",
                  state: { weatherData }, // Pass weatherData as state
                }}
              >
                <Button type="primary" className="location_button">
                  Get Device Location
                </Button>
              </Link>            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
