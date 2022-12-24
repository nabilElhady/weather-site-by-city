import react, { useState } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import "./components/Title.css";
import "./APP.css";
import axios from "axios";

import { Input } from "./components/Input";
const APP = () => {
  async function  state  ()  {
  
  const result= await axios.get(
     `https://api.openweathermap.org/data/2.5/weather?q=${submitted}&appid=59f3b2d01f3f9d43de6edbcf34ecb1b0`
   )
  
   console.log(result)
   setchange(result)
   
  }
  const [change, setchange] = useState("");
  const [submitted, setsubmited] = useState("");

  return (
    <div className="maincontainer">
      <div className="pic">
        <Input
          change={change}
          setchange={setchange}
          submitted={submitted}
          setsubmited={setsubmited}
          state={state}
        ></Input>
        {change && <Card change={change}></Card>}
      </div>
    </div>
  );
};
export default APP;
