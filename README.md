# Weather App

The Weather App is a React-based web application that allows users to easily retrieve and display weather data for a specified location or device location. The application provides real-time information about temperature, humidity, weather conditions, and utilizes appropriate weather icons for better visual representation. Comprehensive error handling ensures a smooth user experience even in case of incorrect input or API unavailability.
## Features

- User-friendly interface for location input and weather display.
- Dynamic weather icon representation based on the current weather condition.
- Error handling for incorrect input or API unavailability.
- Responsive design for seamless use on various devices.

## Technology Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- ReactJS

## Technologies

React: JavaScript library for building user interfaces.
Axios: Promise-based HTTP client for making API requests.
React Router DOM: Library for handling navigation and routing.
HTML5: Standard markup language for creating web pages.
CSS3: Stylesheet language for designing web page layouts and appearance.
Ant Design: A popular design system that offers a set of ready-to-use components, including cards and icons, to streamline UI development.

## Functional Requirements

### 1. Provide a form for users to input a location

The application features a user-friendly form that allows users to enter the name of a city or location they want to know the weather for. The form provides an input field where users can type the name of the location. The application also offers the option to get the user's current device location automatically.

### 2. Retrieve weather data based on user input

The application utilizes the OpenWeatherMap API to retrieve weather data based on the user's input. When a location is entered or the "Get Device Location" button is clicked, the application makes an API call to fetch the relevant weather information.

### 3. Display temperature, humidity, and other weather conditions

Upon successful retrieval of weather data, the application displays key weather information on the Weather Display page. This includes the current temperature in Celsius, humidity percentage, and a brief description of the weather conditions. Additionally, the application presents an appropriate weather icon that corresponds to the current weather condition.

### 4. Show an appropriate weather icon

The application dynamically selects and displays weather icons based on the weather condition returned from the API. This provides users with a visual representation of the current weather, enhancing their understanding of the weather conditions at a glance.

### 5. Handle errors for incorrect input or API unavailability

The application includes comprehensive error handling to provide a smooth user experience. In case of incorrect user input, such as entering an invalid location, the application displays an error message to guide the user. Furthermore, if the API is unavailable or an error occurs during API call, the application gracefully handles the error and informs the user about the issue.


## API

The application uses the [OpenWeatherMap API](https://openweathermap.org/api) to retrieve weather data.

## How to Run Locally
1. Clone this repository to your local machine.
2. Navigate to the project directory using the terminal.
3. Run npm install to install the project's dependencies.
4. Run npm start to start the development server.
5. Open your web browser and navigate to http://localhost:3000 to access the Weather App.
6. Input a location in the form and submit to see weather information.

## Live Demo
A live demo of the Weather App is available at Demo Link. Visit the link to experience the application in action and explore its features.

## Contributors
Rajkumar

## License

This project is licensed under the MIT License.
