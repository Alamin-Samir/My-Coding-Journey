
let myHeading = document.getElementById("headingText");

// heading change
myHeading.textContent = "I have changed the text successfully!";

//css cahnge useing Id
let css=document.getElementById("css");

css.textContent="hello iam new css text"

css.style.color="white";
css.style.backgroundColor="red";

//addEventListener

let btn=document.getElementById("btn");
let text=document.getElementById("text");


btn.addEventListener("click",function(){

text.textContent="hello new bangladesh";

});




let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");



box1.textContent="hiw";
box2.textContent="thdf";

box2.style.backgroundColor="red";

