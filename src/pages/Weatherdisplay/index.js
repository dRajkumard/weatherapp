import React, { useState } from "react";
import { Button, Card, Input, Space, Typography, Row, Col } from "antd";
import { fetchWeatherData } from "../../components/apicall";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { getName } from "country-list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperature1,
  faThermometerHalf,
  faHumidity,
  faHeader,
  faCloudRain,
  faLocation,
  faLocationDot,
  faDroplet,
  faThermometer4,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons"; // Import icons
import "./index.css";
const { Title } = Typography;
const WeatherDisplay = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { state } = location;

  const countryCode = state.data.sys.country;
  const countryName = getName(countryCode);

  console.log("sta", state);
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };
  const goBack = () => {
    navigate("/");
  };
  const iconUrl = `http://openweathermap.org/img/w/${state.data.weather[0].icon}.png`;
  if (!state.data) {
    return null;
  }

  const main = state.data.main;
  const temperatureKelvin = main.temp;
  const temperatur_feels_like = main.feels_like;
  const feels_like_celsius = temperatur_feels_like - 273.15;
  const temperatureCelsius = temperatureKelvin - 273.15;
  return (
    <div className="home">
      <div className="row justify-content-center align-items-center h-100">
        {/* <div className="col-3"> */}
        <Card
          title={
            <div className="card-header">
              <ArrowLeftOutlined
                onClick={goBack}
                style={{ cursor: "pointer", fontWeight: 900 }}
              />
              <Title level={4}>Weather App</Title>
            </div>
          }
          bordered={false}
          className="card-title"
          style={{ width: 300 }}
        >
          <div className="card-body">
            <div className="text-center">
              <img src={iconUrl} alt="Weather Icon" class="mb-3 blue-image" />
              <p className="temperature">{temperatureCelsius.toFixed(2)}°C</p>
              <p className="description">{state.data.weather[0].description}</p>

              <p className="fs-6">
                <FontAwesomeIcon icon={faLocationDot} size="" />{" "}
                {state.data.name}, {countryName}
              </p>
            </div>
            
            <Row className="bottom">

              <Col md={12} className="bottom_right bottom_details">
              <FontAwesomeIcon
                    className="custom-icon "
                    icon={faTemperatureHigh}
                    size="2x"
                  />
                <p>
                 
                  {feels_like_celsius.toFixed(2)}°C
                  <br />
                  Feels like
                </p>
              </Col>
              <Col md={12} className=" bottom_details">
              <FontAwesomeIcon
                    className="custom-icon "
                    icon={faDroplet}
                    size="2x"
                  />
                <p>
                  
                  {state.data.main.humidity}%
                  <br />
                  Humidity
                </p>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
      {/* </div> */}
    </div>
  );
};

export default WeatherDisplay;
