﻿﻿﻿/* Javascript Fundementals *//* 5. Creating Objects *//* Javascript has a data type called "Object" that you can use to create your own custom objects. *//* Javascript data types (constructor functions) begin with a capital letter...*//* Most of the time you will not use these constructors and instead just use literal notation. *//* Object  *//* String  *//* Number  *//* Boolean *//* Array *//* Every object inherits from Object. *//* A child data type inherits methods and properties from its parent. *//* Object has a method "toString". *//* So that means that Number will have a "toString" method also - because of inheritance. *///var num = 8,//	str = num.toString();//str/* Introduction to the "new" operator. *//* "new" is used with constructor functions. *///var obj = new Object();//var str = new String("Welcome to Wakanday 2012");//var str = "Welcome to Wakanday 2012"; //Literal notation is much more common.//str/* Let's create our own custom object. *//* Introduction to "this". *//* "this" refers to the calling object. *//*var person = new Object();person.firstName = "David";person.lastName = "Robbins";person.getFullName = function() {	return this.firstName + " " + this.lastName; //this refers to the person object.};person.getFullName();*//* Here is a better way of creating our person object using literal notation. *//*var person = {	firstName: "David",	lastName: "Robbins",	getFullName: function() {		return this.firstName + " " + this.lastName;	}};person.getFullName();*/