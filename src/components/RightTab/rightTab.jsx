import thermometerIcon from "../../assets/thermometer.svg"
import { useState } from "react";

export const RightTab = ({weatherData, setCityHandle}) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          setCityHandle(inputValue);
          setInputValue("");
        }
      };
    return (
        <>
        <div className="rightTab">
            <div className="search-bar-container">
                <p>{weatherData?.name || "Loading"}</p>
                <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
            </div>
            <div className="air-conditions-container">
                <p>AIR CONDITIONS</p>
                <div className="air-condition">
                    <img src={thermometerIcon}></img>
                    <div className="air-condition-text">
                    <p className="air-upper-text">Real Feel</p> 
                    <p>{weatherData?.main?.feels_like || "---"}</p>
                    </div>
                </div>
            </div>
                <div className="air-condition">
                    <img src={thermometerIcon}></img>
                    <div className="air-condition-text">
                    <p className="air-upper-text">Wind</p> 
                    <p>{weatherData?.wind?.speed || "---"} km/hr</p>
                    </div>
                </div>
                <div className="air-condition">
                    <img src={thermometerIcon}></img>
                    <div className="air-condition-text">
                    <p className="air-upper-text">Chance of rain</p> 
                    <p>{weatherData?.wind?.speed || "---"} %</p>
                    </div>
                </div>
            </div>
        </>
    )
}