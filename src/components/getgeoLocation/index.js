import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    // Check if Geolocation is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <div>
      {latitude && longitude ? (
        <div>
          Latitude: {latitude}<br />
          Longitude: {longitude}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MyComponent;
