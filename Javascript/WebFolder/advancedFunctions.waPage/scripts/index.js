
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	// Let's use closures to create a utility to generate unique names.
	// F I R S T   T R Y
	/*
	var i = 0;
	
	function nameGen() {
		var name = "customName" + i;
		i++;
		return name;
	}
	*/
	
	
	// T R Y   A G A I N         T R Y   A G A I N         T R Y   A G A I N   
	//This time we will protect our code by creating an immediately invoking function.
	// This will allow us to create a utility object that will have it's own namespace.
	// Only our utility object will be in the global scope, not the variables and functions
	// inside it.
	//
	// Note: Our self invoking anonymous function only get's called ONE time. Sweet. No 
	// more problems with memory.
	/*
	var drUtility = (function() {
		var i = 0;
		
		// we want to return an object with our nameGen() function as a method.
		return {
			nameGen: function() {
				var name = "customName" + i;
				i++;
				return name;
			}
		};
		
	}());
	*/
	
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//This example shows a simple closure. 
		//
		//It is called a closure because the function we are returning from "myFunction"
		// closes around arg1. Actually our closure (the anonymous function we are 
		// returning from "myFunction") can close around anything contained by "myFunction"
		// (variables, other functions) by just referencing them.
		// 
		// J A V A S C R I P T   M E M O R Y   M A N A G E M E N T
		//
		// The entire myFunction must be kept in memory until there is no object with
		// a reference to the anonymous function returned my myFunction.
		
		/*
		function myFunction(arg1) {
			return function() {
				alert(arg1);
			}
		}
		
		var fn = myFunction("Hello Closure.");
		fn();
		*/
		
		
		// We have to be careful if we call "myFunction" too many times. Each time we
		// call myFunction we create an execution context that allocates memory for that call.
		// If we keep calling myFunction we end up using more and more and more memory.
		//var fn2 = myFunction("Hello Closure 2.");
		//fn2();
		//fn();
		
		// Clear myFunction from memory.
		//fn = null; 
		//fn2 = null;
		
		
		
		
		
		
		// S O   W H A T   C A N   W E   D O   W I T H   C L O S U R E S ?
		//
		// We can use closures to create modules that can be used without clashing with
		// other Javascript libraries.
		
		//Call our nameGen() function.
		/*
		var name = nameGen(),
			name2 = nameGen();
			
		alert(name + " " + name2);
		*/
		
		
		
		
		//But we have a problem. Our variable "i" and our nameGen() function are in the global
		// scope and we could have naming conflicts with other libraries.
		/*
		function nameGen() {
			return "nothing";
		}
		*/
		
		//Let's call our nameGen() method from our drUtility object.
		/*
		var name = drUtility.nameGen(),
			name2 = drUtility.nameGen();
			
		alert(name + " " + name2);
		*/
		
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
