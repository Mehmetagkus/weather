let cityInput = document.querySelector("#city-input")
let searchButton = document.querySelector("#city-search")

searchButton.addEventListener("click", function () {
    let city = cityInput.value.trim()
    if (city.length <= 0) {
        document.querySelector("#error").style.visibility = "visible"
    } else {
        getWeather(city)
    }
})

let cityName = document.querySelector(".city-name")
let country = document.querySelector(".country-name")
let temp = document.querySelector(".city-temp")
let weather = document.querySelector(".city-weather")
let feelsLike = document.querySelector(".feels-like")
let icons = document.querySelector(".icons")

function getWeather(city) {
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={APIKEY}&lang=tr&units=metric`
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            cityName.innerHTML = data.name
            country.innerHTML = data.sys.country
            temp.innerHTML = Math.round(data.main.temp)
            weather.innerHTML = data.weather[0].description
            feelsLike.innerHTML = Math.round(data.main.feels_like)
            let icon = data.weather[0].icon
            icons.src = `http://openweathermap.org/img/w/${icon}.png`
        }).catch(err => {
            console.log(err)
        })
}
