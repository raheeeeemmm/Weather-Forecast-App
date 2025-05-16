# Weather-Forecast-App
Weather Report System Project Report

Introduction:
The Weather Report System project is designed to provide real-time weather information for specific cities. Leveraging the OpenWeatherMap API, the project fetches and displays temperature, humidity, wind speed, and weather conditions. The implementation utilizes Python and includes features for user interaction.

Objectives:
Retrieve and display real-time weather data for specified cities.
Allow users to choose a city and receive accurate weather information.
Enhance user experience with organized and detailed weather reports.

Technologies Used:
Python
OpenWeatherMap API
Requests library for making HTTP requests
Regular Expressions for coordinate validation

Implementation:
API Integration:
The project integrates with the OpenWeatherMap API to fetch weather data for a specified latitude and longitude. The API key is securely retrieved from an environment variable for enhanced security.
User Interaction:
Users are prompted to choose a city (Islamabad or Rawalpindi in this example) for which they want to retrieve weather information. The latitude and longitude coordinates for each city are predefined.


Data Retrieval and Display:
Upon user input, the project fetches weather data from the API and displays temperature, humidity, wind speed, and weather conditions in a formatted manner. Temperature is presented in both Celsius and Fahrenheit for user convenience.

Coordinate Validation:
The project includes a coordinate validation function using regular expressions to ensure that the latitude and longitude provided by the user are valid floating-point numbers.

Results:
The Weather Report System successfully retrieves and displays real-time weather information for the selected cities. Users can easily access detailed weather reports, enhancing their understanding of current weather conditions.

Conclusion:
The Weather Report System project fulfills its objectives by providing users with a convenient and organized way to access real-time weather data. The use of the OpenWeatherMap API ensures accurate and up-to-date information. The modular code structure allows for easy maintenance and future enhancements to adapt to changing requirements.
