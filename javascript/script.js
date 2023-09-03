// Three type of JS display message
document.getElementById("welcome").innerHTML = "Hello from JavaScript";
//alert('Hello from Alert Box.');
console.log('Hello from Console.')

                                            // Java Script Syntax
// 1. Create Variable
var a; // Declare Variable
var A; // JavaScript Language is Case Sensitive

// 2. Use Variable
a = 1; // Assign value to a declared variable
A = a + 4;
console.log(a,A);

// 3.Java Script Operator
// JavaScript's Operator Precedence (),*,/,+ & - 
var b = 4 + 5; // + Add Operator

b = 2 * 5;     // * Multiply Operator

b = 5 / 10;    // / Division Operator -> Division

b = 5 % 10;    // % Remainder Operator -> Remainder(Modulus)

b = 6 - 3;     // - Minus Operator

b = ( 3 + 1 ) * 5 + 1 - ( 9 / 3 ); // () Operator 

//alert(b);

// 4.JavaScript Camel Case

var first_name; // Naming Variable using '_'
var FirstName;  // Naming Variable using Upper Camel Case(Pascal Case)
var firstName;  // Naming Variable using Lower Camel Case. Use this Camel case in JavaScript

// 5.JavaScript Variables
/*
    Variables are containers for storing data value
*/
    // JavaScript Data Types
var num = 3.134;     // Number format with Decimal Value
// console.log(typeof(num));
num = 56;            // Number format with Integer Value
// console.log(typeof(num));
num = true;         // Boolean data type
// console.log(typeof(num));
num = "Thu Ya Oo's";  // String data type with "" 
//console.log(num);
num = 'Thu Ya Oo said \'Hello World\' ';  // String data type with ''
//console.log(num);

    // JavaScript Variable
var dateOfBirth = 'Var Variable';
let dob = 'Let Variable';
const arr = 'Constant Variable'

    // One Statement with many variables
let person = 'Mg Mg',age = 34, birthYear = '1996',net = 4500000.78, spouse = false;

    // Difference Between var let and const variable
    /*
    The var keyword is used in all JavaScript code from 1995 to 2015.

    The let and const keywords were added to JavaScript in 2015.
    */
// Use var keyword if the value of the variable can change or
// if the browser version is old. Use var for public variable
var num1 = 4.56
var num1 = "Thu Ya"; // var variable can be re declare

// Use let keyword if the value of the variable can change or
// within block, cannot call from outside of the block  {}
let num2 = 'Thu Ya';
//let num2 = 5667.78; // let variable can not be re declare

// Use const keyword if the value of the variable can not be changed or
// within block, cannot call from outside of the block  {}
const price1 = 4.5;
const price2 = 8;
//const price2 = 567.78; // const variable can not be re declare

const price3 = price1 + price2;
//price3 = 0; //Error the value is already assigned can not re-assign twice;
//let price3 = price1 + price2;
//price3 = 6;
//console.log(price3);

// 6. JavaScript Operators
// Assign a to addtion of z and y
let c = 3 + 6; //  = sign mean assignment operator, + sign mean addtion operator

// 6.a Arithmetic Operator
 c = 2 + 3;  // result - 5
 c = 5 - 3;  // result - 2
 c = 2 * 3;  // result - 6
 c = 6 / 3;  // result - 2
 c = 7 % 3;  // result - 1
 c = 2 ** 3; // result - 8
 let d = c++;// result - 8 , c = 9
 d = ++c;    // result - 10 , c = 10
 d = d--;    // result - 10 , d = 9
 let e = --d;// result - 8  , d = 8

 c = 0;

 d = c++;  // Memory ထဲမှာ နေရာယူတယ် cတန်ဖိုးကို ၁ တိုးတယ်။  d = 0, c = 1

 d = ++c;  // cတန်ဖိုးကို ၁ တိုးတယ် Memory ထဲမှာ နေရာယူတယ်။  d = 2, c = 2
// console.log(e);

 // 6.b Assignment Operator
 e = 1      // result - 1
 e += 2      // result - 3  same as e = e + 2
 e -= 1      // result - 2  same as e = e - 1
 e *= 3      // result - 6  same as e = e * 3
 e /= 3      // result - 2  same as e = e / 3
 e %= 2 + 1 ;// result - 2  same as e = e % 2
 e **= 2     // result - 4  same as e = e ** 2
// console.log(e);

// 6.c Comparison Operator
    // value1  ==  value2    // Equal Equal 
    // value1 ===  value2  // Equal Equal with data type validation
    //  !=     // Not Equal
    //  !==    // Not Equal with data type validation
    //  >      // Greater Than
    //  <      // Less Than
    //  >=     //  Greater Than Equal
    //  <=     //  Less Than Equal
    //  ? value1 : value2     //  Ternary Operator

// 6.d Logical Operator
    // &&, ||, !

// 7. JavaScript Data Types
    let f = "Hello " // String data type
    f = 123.56       // Number data type
    f = true         // Boolean data type
    f = BigInt(12345543545545567787888989); // BigInt Data Type
    f = [1,2,3,4,5,6,7] // Array Data Type
    f=  ["A","B","C","D"] // String Array
    f = {"firstName":"ThuYa","lastName":"Oo","Age":25,"isStudent":false,"totalNet":345000.78} // Object Data Type
    /*
    f = [
        {"firstName":"ThuYa","lastName":"Oo","Age":25,"isStudent":false,"totalNet":345000.78} ,
        {"firstName":"John","lastName":"David","Age":12,"isStudent":true,"totalNet":300.78} 
    ]; // Object Array data type
*/
    const personInfo = {"firstName":"ThuYa","lastName":"Oo",
    "fullName":function(){return this.firstName + this.lastName},
    "Age":25,"isStudent":false,"totalNet":345000.78}; // Object Method
    let g; // Undefined Data Type
    g = null  // Null data type
    // Access Object Properties
    console.log(f.isStudent,f["firstName"],personInfo.fullName()); // Two Type of Accessing Object and Object Method

//  8. Functions
//8 a. Return Function
function addTwoNumber(a,b){ // a and b are parameters
    return a+b;
}
const number = (a,b) => a+b;
console.log(number(2,5))
console.log(addTwoNumber(2,5)); // 2 and 5 are arguments

// 8 b. Not Retun (Void) Function
function sayMessage(message){
    console.log(message);
}
//sayMessage("This is the void function woring");

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
//console.log(toCelsius(210));

// 9 JavaScript Event
    // onchange,onclick,onmouseover,onmouseout,onkeydown,onload

function displayDate(){
    const date = document.getElementById("date"); //<p> </P>
    date.innerHTML = "Today Date is: "+ new Date(); //<p>Today..... </P>
}

// 10 JavaScript Objects
    // Object can contain many value; It is a variable too.
const car = {type:"Fiat",model:"2020",color:"White"};

    // Access Object value
//console.log(car.type,car["model"]);

    // Object Method
    // age is not a variable type, It is Function
    // persons is called Object
    // "name" is called property
    // "ThuYa Oo" is called property value
    // "this" is a keyword, not a variable.So you can change it value
const persons = {name:"ThuYa Oo",birthYear:1997,relationship:false,age:function(){return 2023-this.birthYear}};

    //Accessing Object Method Value () call parentheses
//console.log(persons.age()); 

// 11 JavaScript Event

const text = document.getElementById("name");
const showName = document.getElementById("showname");
const mouseDetect = document.getElementById("mouseevent");
const kDown = document.getElementById("kdownText");

function showNames(){
    showName.innerHTML = text.value;
}

function mouseOver(){
    mouseDetect.innerHTML = "Mouse Over Event Detected!";
}

function mouseOut(){
    mouseDetect.innerHTML = "Mouse Out Event Detected!";
}

function keyDown() {
    kDown.innerHTML = "Key Down Event Detected!";
}

// 12 JavaScript String Methods

const str = "Hello World!";

const str1= " Mr,John ";

const str2= "5";

const strlist = "Apple,Orange,Banana";

console.log(str.length); // 12 Start from 1

console.log(str.slice(0,5)); // Hello (start,end)

console.log(str.substring(0,5)); // Hello (start,end) 

console.log(str.substr(0,5)); // Hello (start,end) 

console.log(str.replace("Hello","Hi"));

console.log(str.replaceAll("l","o"))

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.concat(str1));

console.log(str1.trim());

console.log(str1.trimStart());

console.log(str1.trimEnd());

console.log(str2.padStart(3,"x"));

console.log(str2.padEnd(5,"x"));

console.log(str1.charAt(1));  // M

console.log(str1.charCodeAt(1));  // 77

console.log(strlist.split(","));

console.log(strlist.split(",")[2]);


// 13 String Search 
let filepath = "D:\ThuYaOo/Training/JavaScript/html/"
let fileName = "index.html";
let fullPath = filepath.concat(fileName);

console.log(fullPath);

// a. indexOf() return indexNumber of first occurance

console.log(filepath.indexOf("/"));
console.log(filepath.indexOf("/",11)); // start position of first occurance

// b. lastIndexOf() return indexNumber of first occurance

console.log(filepath.lastIndexOf("/"));
console.log(filepath.lastIndexOf("/",11)); // last position of backward occurance

// c. search() return th eposition of the match

console.log(filepath.search("Thu"));

console.log(filepath.search(/Oo/)); // search th evalue with regular expression

// d. match() return an array of the first occurance
//    matchAll() return an array of the first occurance

let txt = "The rain is continue RAining in the middle of the NewYork City."

const arr1 = txt.match("ain")
const arr2 = txt.match(/ain/)
const arr3 = txt.match(/ain/g) // search all occurance
const arr4 = txt.match(/ain/gi) // search all occurance with case insensitive

const arr5 = txt.matchAll("ain");
//const arr6 = txt.matchAll(/ain/); // Return Error 
const arr7 = txt.matchAll(/ain/g);
const arr8 = txt.matchAll(/ain/gi);

console.log(arr1["index"]);
console.log(arr2);
console.log(arr3);
console.log(arr4);

console.log(arr5["index"]);
//console.log(arr6);
console.log(arr7);
console.log(arr8);

// e. includes() -> return true if exist or false if not, Case sensitive

console.log(txt.includes("is"));
console.log(txt.includes("RAin",11)); // with starting position

// f. startWith() -> return true if the starting value is exist otherwise false, Case Sensitive

console.log(txt.startsWith("The"))
console.log(txt.startsWith(" ",11)) // start position Index

// g. endWith() -> return true if the ending value is exist otherwise false, Case Sensitive

console.log(txt.endsWith("City."))
console.log(txt.endsWith("Ne",11)) // end position Index




