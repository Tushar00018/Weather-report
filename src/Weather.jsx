import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./infoBox.css";

export default function WeatherApp() {
  let [weather, setWeather] = useState({
    city: "Bengaluru",
    humidity: 20,
    temp: 22,
    temp_max: 27,
    temp_min: 22,
    weather: "Rainy",
    feels_like: 19.9,
  });

  let updateWeather = (result) => {
    setWeather(result);
  };

  console.log(weather);

  let IMG_URL = "";

  if (weather.temp <= 24) {
    IMG_URL =
      "https://imgs.search.brave.com/BFrQcnpv4V4_rhIhOA_xapAFJMrvB7081bauKww77WM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjE0NzEwMjYtMGJi/Yjc3NTM1ZDI1P2Zt/PWpwZyZxPTYwJnc9/MzAwMCZpeGxpYj1y/Yi00LjAuMyZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE9IeDhkMlZoZEdo/bGNueGxibnd3Zkh3/d2ZIeDhNQT09";
  } else if (weather.temp >= 24 && weather.temp <= 30) {
    IMG_URL =
      "https://images.unsplash.com/photo-1637419567748-6789aec01324?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  } else {
    IMG_URL =
      "https://wallpaperbat.com/img/33338-summer-landscape-desktop-wallpaper-computer-background-image.jpg";
  }

  return (
    <div
      className="WeatherApp"
      style={{
        backgroundImage: `url(${IMG_URL})`,
      }}
    >
      <SearchBox updateWeather={updateWeather} />
      <InfoBox weatherInfo={weather} />
    </div>
  );
}
