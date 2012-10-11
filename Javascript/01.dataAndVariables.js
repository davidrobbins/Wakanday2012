﻿﻿/* Javascript Fundementals *//* JavaScript is designed on a simple object-based paradigm. *//* An object is a collection of properties, and a property is association between a name and a value. *//* A value of a property can be a function, which is then known as the object's method. *//* In addition to objects that are predefined in the browser (or server), you can define your own objects. *//* 1. Data and Variables *//* D A T A   T Y P E S *//* P R I M A R Y   D A T A   T Y P E S*//* String, Number, Boolean*//* C O M P O S I T E   D A T A   T Y P E S*//* Object, Array*//* S P E C I A L   D A T A   T Y P E S*//* Null, Undefined*//* S T R I N G  *///var myString = "Welcome to Wakanday 2012!" //String literal.//myString/* N U M B E R*///var myNumber = 10;//myNumber//var pi = 3.14;//pi/*Boolean*//*var isBool = false;if (isBool) {	var message = "Yes it is true what they say about Michel Gerin.";} else {	var message = "Don't believe the rumors about Michel.";}message*//* M A T H *//* A S S I G N M E N T   O P E R A T O R *///var sum = 4 + 5;//sum//var difference = 4 - 5;//difference/* Optimization Tip: Javascript Engine can execute one statement faster than two statements. *//*var sum = 4 + 5,	difference = 4 - 5,	product = 4 * 5,	quotient = 4 /5;	"The answers. Sum: " + sum + " / Difference: " + difference + " / Product: " + " / Quotient: " + quotient*//* Of course we are not limited to one operation in an expression. *///var foo = 4 + 5 * 6 - 8; //Order of operations: Multiplication, then addition and subtraction. Then left to right.//foo//var foo = 4 + 5 * (6 - 8); //Use paranthesis to change order.//foo/* S T R I N G S   -   C O N C A T E N A T I O N*//* Concatenation operator is the same as the addition operator *///var foo = "Welcome to Javascript " + "101";//foo/* Mix both operators. Not very useful - but it's interesting. *///var foo = 4 + 5 + "7";//foo//var foo = "7" + 4 + 5;//foo//var foo = 4 + 5 + "7" + 6 + 5;//foo/*Convert a number to a string. *///var foo = 6 + "";//foo/* Convert a string to a number. *///var foo = parseInt("34");//foo/* Pass in a radix *///var foo = parseInt("34", 8);//foo/* Parse a floating point number. *///var foo = parseInt("3.14", 10);//foo//var foo = parseFloat("3.14", 10);//foo