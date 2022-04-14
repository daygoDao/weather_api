const locationName = document.querySelector("h2");

const getWeather = async () => {
  const cityName = document.querySelector("#city").value;
  const api_key = "ddb60140d329c8a98208e738298a1b19";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=${api_key}&units=imperial`;
  const res = await fetch(url);
  const weather = await res.json();

  outputDOM(weather)
  console.log(weather);
};

const outputDOM = (weather) => {
    document.querySelector('.locationName').textContent = weather.name;
    document.querySelector('.locationStatus').textContent = weather.weather[0].main;
    document.querySelector('.locationTemp').textContent = `${weather.main.temp} ℃`;
}

document.querySelector(".findWeather").addEventListener("click", getWeather);