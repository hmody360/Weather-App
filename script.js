const searchInput = document.getElementById("search")
const searchBtn = document.getElementById("searchBtn")
const cityName = document.getElementById("cityName")
const weather = document.getElementById("weather")
const temp = document.getElementById("temp")
const tempMin = document.getElementById("tempMin")
const tempMax = document.getElementById("tempMax")

// const url = 'https://openweather43.p.rapidapi.com/weather?q=mecca&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=metric';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '141e9f119cmshbf4ae63a401395dp1da021jsn41b29fdb0b22',
        'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
    }
};
const search = () => {
    const url = `https://openweather43.p.rapidapi.com/weather?q=${searchInput.value}&appid=da0f9c8d90bde7e619c3ec47766a42f4&units=metric`
    return url
}

const getWeatherInfo = async (city) => {
    try {
        const response = await fetch(city, options)
        const value = await response.json()
        cityName.innerText = value.name
        weather.innerText = value.weather[0].main
        temp.innerText = `Temp: ${value.main.temp}°`
        tempMin.innerText = `Minimum Temp: ${value.main.temp_min}°`
        tempMax.innerText = `Maximum Temp: ${value.main.temp_max}°`
    } catch (error) {
        console.log(error);
        cityName.innerText = "City Not Found"
        weather.innerText = "---"
        temp.innerText = `--°`
        tempMin.innerText = `--°`
        tempMax.innerText = `--°`
    }
}

searchBtn.onclick = () => {
    const url = search()
    getWeatherInfo(url)
}