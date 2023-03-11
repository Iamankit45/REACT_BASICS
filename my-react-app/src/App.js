import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Sdata from "./Sdata";

function app() {
  return ReactDOM.render(
    <>
      <h1 className="heading_style">List of Top 5 Netflix webseries</h1>

      {Sdata.map((val, index) => {
        return (
          <Cards
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        );
      })}
    </>,
    document.getElementById("root")
  );
}

export default app;
