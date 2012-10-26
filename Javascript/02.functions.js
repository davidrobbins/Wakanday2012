﻿﻿/* Javascript Fundementals *//* 2. Functions *//* Functions let us reuse code. *//* Besides the built-in functions like parseInt - we can write our own functions. *//* Let's Write Our First Function *//* Code section one. */var foo = 2 + 3;foo = foo + 1;foo = foo * 8;/* Code section 2. */var bar = 3 + 3;bar = bar + 1;bar = bar * 8;/* Let's Refactor This Code into a Function *//* We will define a parameter - this variable will only be available inside the function. *//* Note: we are using function declaration syntax. *//*function myFirstFunction(paramOne) {	paramOne = paramOne + 3;	paramOne = paramOne + 1;	paramOne = paramOne * 8;		return paramOne;}var foo = myFirstFunction(2);var bar = myFirstFunction(3);"foo: " + foo + " / bar: " + bar*//* You can pass in as many parameters as you wish. *//*function mySecondFunction(paramOne, paramTwo) {	paramOne = paramOne + 3;	paramOne = paramOne + 1;	paramOne = paramOne * 8;		return paramOne * paramTwo;}var foo = mySecondFunction(2, 2);foo*//* In Javascript Functions are values. You can assign functions to variables. *//*var doSomething = function (paramOne, paramTwo) {	paramOne = paramOne + 3;	paramOne = paramOne + 1;	paramOne = paramOne * 8;		return paramOne * paramTwo;};doSomething(2, 4); //This is ok. *//* N O W   F O R   S O M E T H I N G  R E A L L Y   C O O L *//* You can pass a function as a parameter to another function. *//*var doSomething = function (paramOne, paramTwo, fn) {	paramOne = paramOne + 3;	paramOne = paramOne + 1;	paramOne = paramOne * 8;		return fn(paramOne, paramTwo);};function sum(paramOne, paramTwo) {	return paramOne + paramTwo;}function product(paramOne, paramTwo) {	return paramOne * paramTwo;}var foo = doSomething(2, 2, sum);var bar = doSomething(2, 2, product);"foo sum: " + foo + " / bar product: " + bar*//* A N O N Y M O U S   F U N C T I O N S *//* You will use anonymous function all the time in your Wakanda projects. *//* See functions101 page to see this in action. *//*var doSomething = function (paramOne, paramTwo, fn) {	paramOne = paramOne + 3;	paramOne = paramOne + 1;	paramOne = paramOne * 8;		return fn(paramOne, paramTwo);};var bar = doSomething(2, 2, function(paramOne, paramTwo) {	return paramOne * paramTwo;});bar*//* P E E K   A T   C L O S U R E S *//* (run in browser console) *//*function makeAddFunction(amount) {  function add(number) {    return number + amount;  }  return add;}var addTwo = makeAddFunction(2); //addTwo closes aroung amount.var addFive = makeAddFunction(5);addTwo(1) + addFive(1)*/