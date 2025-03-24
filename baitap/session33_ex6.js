const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

let button = document.getElementsByTagName("button")[0];
let container = document.getElementsByClassName("colum")[0];

button.addEventListener("click", function(event) {
    event.preventDefault();
    let inputValue = document.getElementsByTagName("input")[0].value.trim();
    let weather = weatherData[inputValue];

    if (weather) {
        container.innerHTML = `
            <div class="weather-container">
                <h2>${inputValue}</h2>
                <div class="row">
                    <span style="font-size: 50px;">${weather.icon}</span>
                    <span style="font-size: 40px; font-weight: bold;">${weather.temperature}°C</span>
                     <div class="colum">
                    <span><strong>${weather.description}</strong></span>
                    <span><strong>Độ ẩm:</strong> ${weather.humidity}%</span>
                    <span><strong>Tốc độ gió:</strong> ${weather.windSpeed} km/h</span>
                </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `<p style="color: red;">Không tìm thấy thành phố!</p>`;
    }
});
