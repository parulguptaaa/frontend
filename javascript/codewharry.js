//1.ways to print in jvscript
//2.javascript console API(application prog. interface)
// console.log("hello world", 4 + 6, " another log");
// alert("me");
// document.write("this is a document");
// console.warn("this is a warning");
// console.error("this is an error");
// console.clear;
// console.assert(4 == (6 - 2));
// 3. javascript variables
var num1=34;
var num2=56;
// console.log(num1+num2);
// 4. datatypes in js
var str1="this is";
var str2=" a string";
// console.log(str1+str2);
// objects
var marks={
    ravi:34,
    shubham:76,
    harry:99.97
}
// console.log(marks);
var und=undefined;
// console.log(und);
// by default undefined
var fn;
// console.log(fn);
var n=null;
// console.log(n);
// two types of datatypes in js: 
// 1.primitive data types:symbol,undefined,null,number,string,boolean
// 2.reference data types:arrays and objects
var arr=[1,2,3,4,5,"ken"];
// FOR MULTIPLE CURSOR-ALT & CLICK
// arithmetic /assignment /comparison /logical operators
// logical and-&&
// logical or-||
// logical not-!
/*function avg(a,b){
    return (a+b)/2;
}
c1=avg(4,6);
c2=avg(14,16);
console.log(c1,c2);
// chrome console-blue:number,black:string
// conditionals in js
*/
/*var age=prompt("what is your age?");
if(age>=18){
    console.log("you are an adult");
}else{
    console.log("you are not an adult");
}*/
// loops in js
var arr=[1,2,3,4,5,6,7];
/*
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/
/*arr.forEach(function(element){
    if(element%2==0){
    console.log(element);
    }
})*/

// const z=0;
// z++;
/*let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}*/
// break & continue
let myArr=['fan','cam',34,true,null];
// array methods
console.log(myArr.length);
// myArr.pop();
// myArr.push("parul");
console.log(myArr.unshift("parul"));
// unshift gives the length of the new array 
// unshift adds the element in the starting 
// MDN website for array methods
console.log(myArr);
myArr.toString();
console.log(myArr.sort());
// string methods in js
let myString="this is parul";
console.log(myString.length);
console.log(myString.indexOf("parul"));
// lastIndexOF
// slice
console.log(myString.slice(1,6));
console.log(myString.replace("parul","duggu"));

let myDate=new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());

// dom manipulation 
let elem=document.getElementById('click');
// console.log(elem);

let elemClass=document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-succ");
// elemClass[0].classList.remove("text-succ");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);
let tn=document.getElementsByTagName('div');
// console.log(tn);
createdEle=document.createElement('p');
createdEle.innerText="This is the para created w the help of js";
tn[0].appendChild(createdEle);
createdEle2=document.createElement('u');
createdEle2.innerText="This is the underlined js para";
tn[0].replaceChild(createdEle2,createdEle);
// tn[0].removeChild(createdEle2);->removes an element
// document.title
// .images
// .url
sel=document.querySelector('.container');
console.log(sel);
sel=document.querySelectorAll('.container');
console.log(sel);

function clicked(){
    console.log("the button was clicked");
}
// events in js
window.onload=function(){
    console.log("the document was loaded");
}
/*
firstContainer.addEventListener('click',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>we hv clicked</b>";
    console.log("clicked the container");
})
firstContainer.addEventListener('mouseover',function(){
    console.log("mouse on container");
})
firstContainer.addEventListener('mouseout',function(){
    console.log("mouse out of container");
})*/
let prevHTML=document.querySelectorAll('.container')[1].innerHTML;
firstContainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevHTML;
    console.log("mouse up when clicked on container");
})
firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>we hv clicked</b>";
    console.log("mouse down when clicked on container");
})