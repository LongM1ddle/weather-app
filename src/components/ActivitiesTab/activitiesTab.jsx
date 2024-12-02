import { Link } from "react-router-dom";
import heart from "../../assets/heart.svg";

export const ActivitesTab = ({setCityHandle}) => {
    
  return (
    <div className="activities-tab">
      <div className="activities-title">
        <img src={heart}></img>
       Activities in your area
      </div>
      <div className="city-list-container">
        <div className="city" onClick={()=>{
          setCityHandle("Bishek")
        }}>
          <img src="https://avatars.mds.yandex.net/i?id=e1a47378c954924f8901d27b159817d1_l-8281979-images-thumbs&n=13"></img>
          <p>Bishkek</p>
        </div>
        <div className="city" onClick={()=>{
          setCityHandle("Jalal-Abad")
        }}>
          <img src="https://avatars.mds.yandex.net/get-altay/4042551/2a0000017fa29268bdf99e07333a4f20e36b/XXL_height"></img>
          <p>Jalal-Abad</p>
        </div>
        <div className="city" onClick={()=>{
          setCityHandle("Osh")
        }}>
          <img src="https://tuzlovgrad.ru/application/uploads/catalog/d73ae8fa78e95d9bcb19716de348d500.jpg"></img>
          <p>Osh</p>
        </div>
        <div className="city" onClick={()=>{
          setCityHandle("Kara-Balta")
        }}>
          <img src="https://avatars.mds.yandex.net/i?id=0b8dd074693bb76da2abf779ef947a78_l-4533159-images-thumbs&n=13"></img>
          <p>Kara-Balta</p>
        </div>
      </div>
    </div>
  );
};
