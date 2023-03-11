import React from "react";
import "./App.css";
// import ReactDOM from "react-dom";



function Cards(props){

    return(<div className="cards">
  
    <div className="card">
  <img src={props.imgsrc}
  
  alt="mypic" className="card__img"/>
  

  
  <div className="card__info">
  <span className="card__category">{props.title}</span>
  <h3 className="card__title">{props.sname}</h3>
  
  <a href={props.link} target="_blank">
  
  <button> Watch NOW</button></a>
  </div>
    </div>
  </div>
  )
  }
  
export default Cards;