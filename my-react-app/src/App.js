import React from "react";
import "./App.css";
import ReactDOM from "react-dom";



function Card(props){

  return(<div className="cards">

  <div className="card">
<img src={props.imgsrc}

alt="mypic" className="card__img"/>

<img src="logo.svg"/>

<div className="card__info">
<span className="card__category">{props.title}</span>
<h3 className="card__title">{props.sname}</h3>

<a href={props.link}target="_blank">

<button> Watch NOW</button></a>
</div>
  </div>
</div>
)
}



function app(){

return(ReactDOM.render(<>



<Card  imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" title="A NETFILX ORIGINAL SERIES" sname="DARK" link="https://www.netflix.com/in/title/80100172"/>
<Card  imgsrc="https://wallpapercave.com/w/wp11827140.jpg" title="A NETFILX ORIGINAL SERIES" sname="StrangerThings" link="https://www.netflix.com/in/title/80057281"/>
<Card  imgsrc="https://wallpapercave.com/w/wp11645498.jpg" title="A NETFILX ORIGINAL SERIES" sname="WEDNESDAY" link="https://www.netflix.com/in/title/80100172"/>
<Card  imgsrc="https://wallpapercave.com/w/wp11632755.jpg" title="A NETFILX ORIGINAL SERIES" sname="ANTMAN" link="https://www.netflix.com/in/title/80100172"/>


  </>,document.getElementById("root")))

}

export default app





