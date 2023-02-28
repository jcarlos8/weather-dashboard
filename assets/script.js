const API_KEY = "8c295c50107e2e0054c474bd42ca51fe"

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=lisbon&units=metric&appid="

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&"

function getData() {
    fetch(forecastUrl + API_KEY)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}
