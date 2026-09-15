let form = document.getElementById("my");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // পেজ রিলোড হওয়া বন্ধ করবে

    // ১. ইনপুটের মান সাবমিট করার মুহূর্তে নিতে হবে (ভেতরে এনে)
    let username = document.getElementById("user-name").value.trim();
    let password = document.getElementById("pass-word").value;

    // ২. এরর দেখানোর স্প্যানগুলো সিলেক্ট করা
    let usererror = document.getElementById("user-error");
    let passworderror = document.getElementById("password-error");

    // ৩. সাবমিট করার সাথে সাথে আগের এরর মেসেজ ক্লিয়ার করে দেওয়া
    usererror.textContent = "";
    passworderror.textContent = "";
    let hasError = false;

    // ৪. ইউজার নেম চেক করা
    if (username === "") {
        usererror.textContent = "user name is required";
        hasError = true;
    }

    // ৫. পাসওয়ার্ড চেক করতে চাইলে এভাবে দিতে পারো
    if (password === "") {
        passworderror.textContent = "password is required";
        hasError = true;
    }

    // ৬. যদি কোনো ভুল বা এরর না থাকে, তবে সফল মেসেজ বা সাবমিটের কাজ করতে পারো
    if (!hasError) {
        console.log("ফর্ম সফলভাবে সাবমিট হয়েছে!");
        // এখানে সার্ভারে ডেটা পাঠানোর কোড বা অন্যান্য কাজ করা যাবে
    }
});