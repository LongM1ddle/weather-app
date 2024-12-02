
import { Link } from "react-router-dom";
import weatherIcon from "../../assets/weather-icon-small.svg";
import navigationIcon from "../../assets/navigation-icon.svg";
import locationIcon from "../../assets/location.svg";
import settingsIcon from "../../assets/settings-icon.svg";

export const LeftTab = () => {
  return (
    <div className="leftTab">
      <div className="profile-picture">
        <Link to="">
          <img
            title="Профиль"
            src="https://cdn.discordapp.com/attachments/1159160399397126245/1309533891656286218/n2dlcr6ublzd1.gif?ex=674f1cf9&is=674dcb79&hm=c9ccb853a6802233d0f1da1c434538649060ff14bcadfa18f92c94401cea04c1&"
          ></img>
        </Link>
      </div>
      <div className="panel-button-collection">
        <Link to="">
      <div className="panel-button">
          <img src={weatherIcon}></img>
          <p>weather</p>
      </div>
        </Link>
        <Link to="">
      <div className="panel-button">
          <img src={navigationIcon}></img>
          <p>explore</p>
      </div>
        </Link>
        <Link to="">
      <div className="panel-button">
          <img src={locationIcon}></img>
          <p>cities</p>
      </div>
        </Link>
      <div className="panel-button">
        <Link to="">
          <img src={settingsIcon}></img>
          <p>settings</p>
        </Link>
      </div>
      </div>
      
    </div>
  );
};
