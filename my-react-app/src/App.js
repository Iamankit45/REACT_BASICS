import React from "react";
import "./App.css";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import Sdata from "./Sdata";

function ncards(val) {
  return (
    <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}

function app() {
  return ReactDOM.render(
    <>
      <h1 className="heading_style">List of Top 5 Netflix webseries</h1>

      {Sdata.map(ncards)}
    </>,
    document.getElementById("root")
  );
}

export default app;
