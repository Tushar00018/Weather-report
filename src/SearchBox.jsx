import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

export default function SearchBox({ updateWeather }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_MY_API_KEY;

  let coordinates = async () => {
    try {
      let fetchData = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
      let response = await fetch(fetchData);
      if (!response.ok) {
        throw new Error("City not found");
      }
      let data = await response.json();
      let result = {
        city: data.name,
        humidity: data.main.humidity,
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        weather: data.weather[0].description,
        feels_like: data.main.feels_like,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError(false);
      let info = await coordinates();
      updateWeather(info);
      setCity("");
    } catch (error) {
      setError(true);
    }
  };

  let cityName = (event) => {
    setCity(event.target.value);
  };

  return (
    <>
      <h1 style={{ color: "gold", paddingTop: "70px" }}>Weather Widget</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-required"
          label="City Name"
          variant="outlined"
          onChange={cityName}
          value={city}
          name="city"
          required
          InputProps={{
            style: { color: "white" },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <br />
        <br />
        <Button
          startIcon={<SearchIcon />}
          variant="filled"
          size="medium"
          type="submit"
          style={{ color: "blue" }}
        >
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No such Place found in our API!</p>}
    </>
  );
}
