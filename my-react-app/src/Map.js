
const oldArr=['ankit','rahul','ankush','rohit','kunal']

console.log(oldArr[0]);
console.log(oldArr[1]);
console.log(oldArr[2]);

  
//now using map
const newarr=oldArr.map(function (cvalue){

return cvalue + " kumar";
});

console.log(newarr);
console.log(oldArr);



const studentData=[

   {id:1,name:"Ankit",degree:"Btech"},
   {id:2,name:"rahul",degree:"Bsc"},
   {id:3,name:"rohit",degree:"Btech"},
   {id:4,name:"shyam",degree:"Bcomm"},
]



console.log(studentData[0]);
console.log(studentData[1]);
console.log(studentData[2]);
console.log(studentData[3]);


//now using map function


const newData =studentData.map((cvalue)=>{
return `my name is ${cvalue.name} . my highest degree is ${cvalue.degree}`;

});
console.log(newData);






