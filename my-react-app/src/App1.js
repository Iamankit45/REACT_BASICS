import React from "react";

import "./App.css";
import css from "./index.css";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import { List, name } from "./List";
import Para from "./Para";
import { List2, myname, myAge } from "./List2";
import { add, sub, mul, div } from "./Calculator";

function App1() {
  const heading2 = {
    color: "rgb(255, 0, 0)",
    textAlign: "center",
    margin: "50px",
    fontFamily: "'Dancing Script', cursive",
  };

  const curdate = new Date().toLocaleDateString();
  const curtime = new Date().toLocaleTimeString();

  const img1 = "https://picsum.photos/200/300";
  const img2 = "https://picsum.photos/210/300";
  const img3 = "https://picsum.photos/220/300";
  const img4 = "https://picsum.photos/280/300";

  let currdate = new Date();
  let currtime = currdate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currtime >= 1 && currtime < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currtime >= 12 && currtime < 19) {
    greeting = "Good Afternoon";
    cssStyle.color = "yellow";
  } else {
    greeting = "Good night";
    cssStyle.color = "blue";
  }

  return ReactDOM.render(
    <>
      <h2 className="heading1">{`current date is ${curdate}`}</h2>
      <h3 style={heading2}>{`current time is ${curtime}`}</h3>

      <div className="img_sec">
        <img src={img1} alt="random images" />
        <img src={img2} alt="random images" />
        <img src={img3} alt="random images" />

        <a href="https://picsum.photos/">
          <img src={img4} alt="random images" />
        </a>
      </div>

      <div className="heading3">
        <h1>
          Hello sir ,<span style={cssStyle}>{greeting}</span>
        </h1>

        <Heading />
        <Para />
        <List2 />

        <List />
        <List2 />

        <h1>{name}</h1>

        <h2>{myname()}</h2>
        <h3>{myAge()}</h3>
        <div className="cal">
          <h4>sum of 6 and 5 is :{add(6, 5)}</h4>
          <h4>difference between 6 and 5 is :{sub(6, 5)}</h4>
          <h4>product of 6 and 5 is :{mul(6, 5)}</h4>
          <h4>dividig result of 6 and 5 is :{div(6, 5)}</h4>
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
}

export default App1;
