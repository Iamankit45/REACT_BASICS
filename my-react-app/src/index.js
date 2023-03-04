import React from "react";
import ReactDOM from "react-dom";

const s1="dark";
const s2="GAME OF THRONES";
const s3="house of dragons";


ReactDOM.render(
  <><h1>Ankit netflix Pick</h1><p>here is the name of the series</p><ol>
<li>{s1}</li>
<li>{s2}</li>
<li>THIRTEENTH FLOOR</li>
<li>WIZARD OF TRAGON</li>
<li>{s3}</li>
  </ol></>,
  document.getElementById("root")
);
