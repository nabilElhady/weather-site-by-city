import react from "react";
import "./Card.scss";
import WbCloudyOutlinedIcon from "@mui/icons-material/WbCloudyOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
const Card = ({ change }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  var today1 = mm + "/" + dd + "/" + yyyy;
  let hours = Number(today.getHours());
  const temp = Number(change.data.main.temp - 273.25);
  const states = change.data.weather[0].main;
  console.log(hours);
  const time =
    hours > 6 && hours < 18 ? `weatherIcon_day` : `weatherIcon_night`;
  return (
    <div>
      <article class="widget">
        <div class={time}>
          {" "}
          {hours > 6 && hours < 18 && (
            <WbSunnyOutlinedIcon className="icon"></WbSunnyOutlinedIcon>
          )}
          {(hours <= 6 || hours >= 18) && (
            <BedtimeOutlinedIcon className="icon"></BedtimeOutlinedIcon>
          )}
        </div>
        <div class="weatherInfo">
          <div class="temperature">
            <span>{temp.toFixed(0)}</span>
          </div>
          <div class="description">
            <div class="weatherCondition">{states}</div>
            <div class="place">{change.data.name}</div>
          </div>
        </div>
        <div class="date">{today1}</div>
      </article>
    </div>
  );
};
export default Card;
