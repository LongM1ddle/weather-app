import { useEffect, useState } from "react";
import { instance } from "../axios/instance";
import { apiURL } from "../api/api";
import location from "../../assets/location.svg";
import arrow from "../../assets/arrow.svg";
import weatherImg from "../../assets/weather-icon.svg";
import { Navigation } from "../Navigation/navigation";
import { RightTab } from "../RightTab/rightTab";

export const WeatherPage = () => {
  
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Kara-Balta");

  const setCityHandle = (city) => {
    setCity(city);
  };
  
  useEffect(() => {
    const getData = async () => {
      try {
      const response = await instance.get(
        `weather?q=${city}&units=metric&appid=${apiURL}`
      );
      setWeatherData(response.data)
      console.log("WeatherData passed to RightTab:", weatherData);
    } catch (error) {
      console.error("Ошибка запроса", error)
    }
      setWeatherData(data.data);
    };
    getData();
  }, [city]);

  return (
    <>
      <div className="cityInfoContainer">
        <div className="cityInfo">
          <p className="cityName">
            <img className="location-city-img" src={location}></img> {weatherData?.name || "load"} <img src={arrow}></img>
          </p>

          <p className="weather" title={weatherData?.weather?.[0]?.description || "Load"}>
            {weatherData?.weather?.[0]?.main || "Loading"}
          </p>

          <p className="temp">{weatherData?.main?.temp || "Loading"} С° </p>
        </div>
        <div className="weatherImgContainer">
          <img src={weatherImg}></img>
        </div>
      </div>

      <div className="navigation">
      {Navigation({weatherData,setCityHandle})}
      </div>
    </>

  );
};
