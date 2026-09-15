
let main=document.getElementById("main")


let span=document.createElement("span")

main.appendChild(span)
span.textContent="hello span tag";


let div1=document.createElement("div")

document.body.appendChild(div1);

div1.textContent="hello div 2";

let p1=document.createElement("p")

div1.appendChild(p1);

p1.textContent="hello p1tag in div1";

div1.className="p9"
p1.id="p5"

//create a list using DOM

let itemInput = document.getElementById("itemInput");
let addBtn = document.getElementById("addBtn");
let itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function() {
    // ১. ইনপুট বক্সের ভেতরে ইউজার যা লিখেছে তা ভ্যালু (value) আকারে তুলে আনা
    let userText = itemInput.value;

    // যদি ইনপুট বক্স ফাঁকা না থাকে, তবেই কাজ করবে
    if (userText !== "") {
        // ২. নতুন একটি 'li' ট্যাগ তৈরি করা
        let newItem = document.createElement("li");

        // ৩. ইউজারের টাইপ করা লেখাটি এই নতুন 'li'-এর ভেতরে বসানো
        newItem.textContent = userText;

        // ৪. 'ul'-এর ভেতরে নতুন আইটেমটি অ্যাপেন্ড বা যুক্ত করা
        itemList.appendChild(newItem);

        // ৫. কাজ শেষে ইনপুট বক্সটি আবার ফাঁকা বা ক্লিয়ার করে দেওয়া
        itemInput.value = "";
    }
});