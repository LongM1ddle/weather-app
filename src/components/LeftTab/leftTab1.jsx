
import { Link } from "react-router-dom";
import weatherIcon from "../../assets/weather-icon-small.svg";
import navigationIcon from "../../assets/navigation-icon.svg";
import locationIcon from "../../assets/location.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import pfp from "../../assets/profile.gif"

export const LeftTab1 = () => {
  return (
    <div className="leftTab">
      <div className="profile-picture">
        <Link to="">
          <img
            title="Профиль"
            src={pfp}
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
