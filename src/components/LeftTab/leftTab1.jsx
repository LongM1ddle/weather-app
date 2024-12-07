
import { Link } from "react-router-dom";
import weatherIcon from "../../assets/weather-icon-small.svg";
import navigationIcon from "../../assets/navigation-icon.svg";
import locationIcon from "../../assets/location.svg";
import settingsIcon from "../../assets/settings-icon.svg";

export const LeftTab1 = () => {
  return (
    <div className="leftTab">
      <div className="profile-picture">
        <Link to="">
          <img
            title="Профиль"
            src="https://cdn.discordapp.com/attachments/1159160399397126245/1309533891656286218/n2dlcr6ublzd1.gif?ex=6753ba39&is=675268b9&hm=632716ec4a73240fbea35a14648ecc216333048efd5b3d143a43a062054e4dcb&"
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
