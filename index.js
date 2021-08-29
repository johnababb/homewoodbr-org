"use strict";
const thisDate = new Date();
console.log(`It is now ${thisDate}`);
console.log(`c:\\\\projects\\TDS\\websites\\homewoodbr-org`);
console.log("index.js says How bout that?");
let width = window.screen.width;
let height = window.screen.height;
console.log(width);
console.log(height);
width = window.screen.availWidth;
height = window.screen.availHeight;
console.log(width);
console.log(height);
width = document.getElementById("winW").textContent + window.innerWidth;
height = document.getElementById("winH").textContent + window.innerHeight;
// console.log(`width ${width}`);
// console.log(`height ${height}`);
// document.getElementById("t52w").innerHTML = 4;
// document.getElementById("t53h").textContent = 3;
// console.log(document.getElementById("t52w").innerHTML);
//console.log(`str14 is ${str14}`);
document.getElementById("winW").textContent = width;
document.getElementById("winH").textContent = height;
function reload() {
  window.location.reload();
  console.log(pressed);
}
