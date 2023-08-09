import React, { useState } from "react";
import { Button, Card, Input, Space, Typography } from "antd";
import { fetchWeatherData } from "../../components/apicall";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import './index.css'
const { Title } = Typography;
const Home = () => {
  const gridStyle = {
    width: "50%",
    textAlign: "center",
  };
  return (
    <div className="home">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-3">
          <Card
            title={
              <div className="card-header">
                <ArrowLeftOutlined />
                <Title level={4} >
                  Weather App
                </Title>
              </div>
            }
            bordered={false}
            className="card-title"
          >
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
