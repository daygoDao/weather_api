const locationName = document.querySelector("h2");

const getWeather = async () => {
  const cityName = document.querySelector("#city").value;
  const api_key = "ddb60140d329c8a98208e738298a1b19";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}`;
  const res = await fetch(url);
  const weather = await res.json();

  console.log(weather);
};

document.querySelector(".findWeather").addEventListener("click", getWeather);