// TODO: Write your JS code in here
const cityName = document.getElementById('city-name');
const date = document.getElementById('date');
const description = document.getElementById('weather-desc');
const temperature = document.getElementById('temperature');
const form = document.getElementById('form');

// default weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=262ebc10fcbdb48d141acf5027dce0ad`)
.then(response => response.json())
.then((data) => {
  cityName.innerText = data.name;
  date.innerText = new Date().toDateString();
  description.innerText = data.weather[0].description;
  temperature.innerText = `${Math.round((data.main.temp) - 273.15)}°C`;
  document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.weather[0].description}')`
  });

// weather from search bar
const fetchWeather = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = document.getElementById('query').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=262ebc10fcbdb48d141acf5027dce0ad`)
      .then(response => response.json())
      .then((data) => {
        cityName.innerText = data.name;
        date.innerText = new Date().toDateString();
        description.innerText = data.weather[0].description;
        temperature.innerText = `${Math.round((data.main.temp) - 273.15)}°C`;
        document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${data.weather[0].description}')`
      });
  });
};
fetchWeather();
