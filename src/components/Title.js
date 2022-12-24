import react from "react";
import Card from "./Card";
import "./Title.css";
const Title = () => {
  return (
    <div className="big-container">
      <div>
        <div class="column">
          <div class="ui raised segment cont">
            {" "}<p className="forecast">4   day    forecast</p>
          </div>
        </div>{" "}
      </div>
      <div className="cards">

      <Card></Card>
   
      </div>
    </div>
  );
};

export default Title;
