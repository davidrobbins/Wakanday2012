﻿﻿﻿/* Javascript Fundementals *//* 4. Working With Objects *//* Objects have properties and methods. *//* Properties: data related to the object. *//* Methods: actions that do something with the object or its data. */var obj = "This is a string object.", //This string object has a "length" property.	len = obj.length;	//len//obj.indexOf("string");//var index = obj.indexOf("is");//index//var index = obj.indexOf("is");//var index2 = obj.indexOf("is", index + 1);//index2//var index = obj.lastIndexOf("is");//index//var substr = obj.substr(0, 4);//substr//var newString = obj.replace("object", "value");//newString//var title = obj.toUpperCase();//title/* Object has a method "toString". *//* So that means that Number will have a "toString" method also - because of inheritance. *///var num = 8,//	numberStr = num.toString();//numberStr