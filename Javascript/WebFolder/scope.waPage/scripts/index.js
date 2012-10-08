
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		/* Let's look first at the global scope. */
		/*
		var globalVar = "This is a global variable.";

		var globalFunction = function() {
			alert(globalVar);
			globalVar = "Value has been modified.";
		};

		globalFunction();
		alert(globalVar);
		*/
		
		
		
		/* Now let's look at local scope. */
		/* Variables and functions are limited to the function they are defined in. */
		/* Variables and functions cannot be accessed from outside the function they are defined in.*/
		/*
		var globalVar = "This is a global variable.";

		var globalFunction = function() {
			var localVar = "This is a local variable.";
			alert(localVar);
			globalVar = "Value has been modified.";
		};
		
		globalFunction();
		alert(localVar); // We will have a problem here. Open the Chrome debugger and look at the console.
		alert(globalVar);
		*/
		
		
		
		/* Just as local variables defined in a function cannot be accessed outside of the function, */
		/*  function parameters cannot be accessed outside of the function it is defined in. */
		/*
		var globalVar = "This is a global variable.";

		var globalFunction = function(paramOne) {
			var localVar = "This is a local variable.";
			alert(paramOne);
			globalVar = "Value has been modified.";
		};
		
		globalFunction(2);
		alert(paramOne); // We will have a problem here. Open the Chrome debugger and look at the console.
		*/
		
		
		
		/* The Scope Chain */
		/*
		var globalVar = "Global Var";

		var globalFunction = function() {
			var localVar = "Local Var";
			
			var localFunction = function() {
				var localVar = "Super Local Var";
				alert(localVar);
			};
			
			localFunction();
			alert(localVar);
		};
		
		globalFunction();
		*/
		
		
	};// @lock
	
	
	
// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
