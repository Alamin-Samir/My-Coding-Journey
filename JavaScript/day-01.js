

// print console



console.log("samir")

//variable
let name="samir"
let age=24;
console.log(name);
console.log(age);

//js addition sub , multi
let a=10;
let b=50;


console.log(a+b);
console.log(a-b);
console.log(a*b);


//even or add

let num=6;
if(num%2===0){
    console.log("even")
}

else{
    print("odd")
}

// print 1 t0 5 number
for (let i=1; i<=5; i++){
    console.log(i)
}

// print a name with use function
function greet(){
    console.log("hello")
}

greet()

// addition with function

function add(a,b){
    console.log(a+b)
}
add(7,9);

//find a largest number

let x=17;
let y=27;

if(x>y)
{
    console.log("x is largest number");

}
else{
        console.log("y is largest nnumber");
    }


    //craete a array

    let fruits=["apple","banana","orange","pinapple","jack-fruit","caster-apple","mango"];

    console.log(fruits);

    // print a fixed iteam in array

    console.log(fruits[1]);


    //show array in loop

for(let i=0; i<fruits.length; i++){

    console.log(fruits[i]);
}

// create a object

let person={
    name:"samir",
    age:26,
    city:"Bogura"
}

console.log(person)

// show fixed object value 

console.log(person.age);


//  if else check

    let mark=78;

    if (mark>=80){
        console.log("A+")
    }

    else if(mark>=70){
        console.log("A")
    }
else{
    print("Fail");
}

//while loop

let i=1;
while(i<=5){
    console.log(i)
    i++
}

//take user input

/*let namee=prompt("enter your namee")

console.log(namee);*/

//square calcute 

let number1 = 5;
console.log("cube =", Math.pow(number1, 3)); 
// square:
 console.log("square =", Math.pow(number1, 2));

 //date
 let today=new Date();
 console.log(today);

 // addition in 1-10 number


 let n=10;

 let sum=n*(n+1)/2;

 console.log(sum);

 //write a function print a 3 number


 function add3(a,b,c){
    return a+b+c;
 }
 console.log(add3(4,7,8));


 // find a even number in 1-100

 for (let i=1; i<=100; i++){
    if(i%2===0){
        console.log(i)
    }
 }

 // name reverse

 let name3="samir"
 let reverse="";

 for(let i=name3.length-1; i>=0; i--){

    reverse=reverse+name3[i]}

    console.log(reverse);


    // calculate even number in array

    let numbers = [12, 5, 8, 20, 15, 22, 7];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log("even number:", evenNumbers);




// array all number addition

let number4 = [10, 20, 30, 40, 50];

let summ = number4.reduce((total, num) => total + num, 0);

console.log("total addition:", summ);


//lenght in string , and case change

let x1="hello bangladesh are you ok right now"

console.log(x1.length)
console.log(x1.toUpperCase());

// add two string value

let a1="hello"
let x2="add me"
console.log(a1 + "" + x2);

//find fixed value in array

if(fruits.includes("mango")){
    console.log("found mango");
}
else{
    console.log("no mango in array");
}

//array push,pop, shift , unshift

let x3=[1,32,6,3,6]
x3.push(4);
console.log(x3)
x3.pop()
console.log(x3);
x3.unshift(7777)
console.log(x3)

//remove duplicate value in array

let x4=[3,3,4,5,6,7,8,9,0,0,7,8,9,67,11,7,8,6,6,8,9,6,7,9,67,8,9,8,7,98,6,9,67,89,7,9,7,8,]


let u =[...new Set(x4)];
console.log(u)


//create  a set, 

let s=new Set();
s.add(1);
s.add(2)
s.add(4)
console.log(s);
s.delete(2);

//add a value in set
let s2 = new Set([1, 2, 3, 54, 6]);

console.log(s2.has(66666) ? "yes" : "no");