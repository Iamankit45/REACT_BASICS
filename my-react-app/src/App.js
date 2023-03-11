import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Sdata from "./Sdata";

function app() {
  return ReactDOM.render(
    <>

    <h1 className="heading_style">List of Top 5 Netflix webseries

    </h1>
      <Cards
        imgsrc={Sdata[0].imgsrc}
        title="A NETFILX ORIGINAL SERIES"
        sname="DARK"
        link="https://www.netflix.com/in/title/80100172"
      />
      <Cards
        imgsrc="https://wallpapercave.com/w/wp11827140.jpg"
        title="A NETFILX ORIGINAL SERIES"
        sname="StrangerThings"
        link="https://www.netflix.com/in/title/80057281"
      />
      <Cards
        imgsrc="https://wallpapercave.com/w/wp11645498.jpg"
        title="A NETFILX ORIGINAL SERIES"
        sname="WEDNESDAY"
        link="https://www.netflix.com/in/title/80100172"
      />
      <Cards
        imgsrc="https://wallpapercave.com/w/wp11632755.jpg"
        title="A NETFILX ORIGINAL SERIES"
        sname="ANTMAN"
        link="https://www.netflix.com/in/title/80100172"
      />
    </>,
    document.getElementById("root")
  );
}

export default app;
