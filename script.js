
let str ="";
let str1="";
function expression(value){
   
    str= str + value;
    document.getElementById("textarea").innerHTML = `${str}`;
}
function finalans(){
    let answ = parse(str);
    document.getElementById("textarea").innerHTML = ` = ${answ}`;

}
function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }
function restart(){
    console.log(str);
    console.log(str1);
    str = "";
    str1 ="";
    document.getElementById("textarea").innerHTML = "0";
}
