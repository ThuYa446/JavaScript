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
num = "Thu Ya Oo";  // String data type with "" 
//console.log(typeof(num));
num = 'Thu Ya Oo';  // String data type with ''
//console.log(typeof(num));

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

// Use let keyword if the value of the variable can not be changed or
// within block, cannot call from outside of the block  {}
const price1 = 4.5;
const price2 = 8;
//const price2 = 567.78; // const variable can not be re declare

//const price3 = price1 + price2;
// price3 = 0; Error the value is already assigned can not assign twice;
let price3 = price1 + price2;
//price3 = 6;
console.log(price3);









