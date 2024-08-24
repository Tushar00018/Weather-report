import "./infoBox.css";

export default function InfoBox({ weatherInfo }) {
  let IMG_URL =
    "https://imgs.search.brave.com/mkoiO_dhcP9FdOtrqI6hsGQgHTHvf7n1a1PMWV0H9H4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9n/cmFzc3ktZmllbGQt/d2l0aC1sZWFmbGVz/cy10cmVlcy1kaXN0/YW5jZS1jbG91ZHkt/c2t5LWJhY2tncm91/bmRfMTgxNjI0LTQ1/MzUuanBnP3NpemU9/NjI2JmV4dD1qcGc";

  return (
    <>
      <h1 style={{ color: "gold" }}>WeatherInfo: {weatherInfo.weather}</h1>
      <div className="outer-Card">
        <div className="card">
          <h2>{weatherInfo.city.toUpperCase()}</h2>
          <p>Humidity: {weatherInfo.humidity}%</p>
          <p>Temprature: {weatherInfo.temp}&deg;C</p>
          <p>Max_Temprature: {weatherInfo.temp_max}&deg;C</p>
          <p>Min_Temprature: {weatherInfo.temp_min}&deg;C</p>
          <p>
            The Weather can be described as {weatherInfo.weather} <br />
            and feels like {weatherInfo.feels_like}{" "}
          </p>
        </div>
      </div>
    </>
  );
}
