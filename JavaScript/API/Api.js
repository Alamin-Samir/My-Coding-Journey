async function loadWeather() {
    try {
        let response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=c59e564b07f7fbf35c141c9947b77084"
        );
        
        let data = await response.json();

        document.getElementById("result").innerHTML = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("result").innerHTML = "Failed to load weather data!";
        console.log(error);
    }
}

loadWeather();