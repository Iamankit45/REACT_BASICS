import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Para from "./Para";



// const s1="dark";
// const s2="GAME OF THRONES";
// const s3="house of dragons";


// const fname="ankit";
// const lname="kumar";

// ReactDOM.render(
//   <><h1>Ankit netflix Pick</h1><p>here is the name of the series</p><ol>
// <li>{s1}</li>
// <li>{s2}</li>
// <li>THIRTEENTH FLOOR</li>
// <li>WIZARD OF TRAGON</li>
// <li>{s3}</li>
//   </ol></>,
//   document.getElementById("root")
// );



// ReactDOM.render(
// <>
// <h2>{`my firstname is ${fname} and my lastname is ${lname}`}</h2>

// <p1>{`sum of 2 nad 3 is ${2+3}`}</p1>

// </>,document.getElementById("root")
// );



//finding current date and time 

// .heading1{

//   color:rgb(255, 0, 0);
//   text-align: center;
//   margin:50px;
//   font-family: 'Dancing Script', cursive;
  
// }

const heading2={
color:"rgb(255, 0, 0)",
textAlign:"center",
margin:"50px",
fontFamily: "'Dancing Script', cursive"



}


const curdate=new Date().toLocaleDateString();
const curtime=new Date().toLocaleTimeString();

const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/210/300";
const img3="https://picsum.photos/220/300";
const img4="https://picsum.photos/280/300";


let currdate=new Date();
let currtime=currdate.getHours();
let greeting='';
const cssStyle={};

if (currtime>=1&&currtime<12) {
  
  greeting="Good Morning";
  cssStyle.color='green';
}else if(currtime>=12&&currtime<19){
  greeting="Good Afternoon";
  cssStyle.color='yellow';
}else{
  greeting="Good night";
  cssStyle.color='blue';
}




ReactDOM.render(
  <>
  
  <h2 className="heading1">{`current date is ${curdate}`}</h2>
  <h3 style={heading2}>{`current time is ${curtime}`}</h3>

  <div className="img_sec">
 <img src={img1} alt="random images"/>
 <img src={img2} alt="random images"/>
 <img src={img3} alt="random images"/>

<a href="https://picsum.photos/">
<img src={img4} alt="random images"/>
</a>
</div>




<div className="heading3">

<h1>Hello sir ,<span style={cssStyle}>{greeting}</span></h1>


  <Heading/>
  <Para/>
  
</div>





  </>,document.getElementById("root")
  );



