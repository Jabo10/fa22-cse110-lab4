let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
//using milliseconds and new date for each time 
setInterval(() => {
  let d = new Date(); 
  let time = d.toLocaleTimeString();
  console.log(time);
}, 1000); 
