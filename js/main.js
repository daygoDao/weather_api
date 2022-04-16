const locationName = document.querySelector("h2");

const getWeather = async () => {
  try {
    const cityName = document.querySelector("#city").value;
    const yek_ipa = "{insert api key here}";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},us&appid=${yek_ipa}&units=imperial`;
    const res = await fetch(url);
    const weather = await res.json();

    outputDOM(weather);
    console.log(weather);

  } catch (err) {
    console.log(err);
  }
};

const outputDOM = (weather) => {
  document.querySelector(".locationName").textContent = weather.name;
  document.querySelector(".locationStatus").textContent =
    weather.weather[0].main;
  document.querySelector(
    ".locationTemp"
  ).textContent = `${weather.main.temp} ℃`;
};

document.querySelector(".findWeather").addEventListener("click", getWeather);
