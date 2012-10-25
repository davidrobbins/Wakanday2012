
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock


	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock

		//Do this because Wakanda sets a style on these elements at runtime overridding my styles.
		$('ul').css('margin-left', '10px');
		$('dd').css('padding', '4px');
		$('dt').css('padding', '4px');
		$('#container3, #container4, , #container5, #container6').css('opacity', .1);
		
		
		
		//What is jQuery?
		// A fast, concise, library that simplifies how to traverse HTML documents (DOM), 
		// handle events, perform animations, and more. 
		//jQuery abstracts away complex code and browser quirks.
		// 
		//jQuery factory method: $() or jQuery().
		//
		//$(function(){}) : executes given method once DOM is loaded. You don't need this because we are 
		// inside WAF.onAfterInit function.
		//
		//$(elements) or $(css selector) : return jQuery stack matching given elements.
		//
		//$(html) : returns jQuery stack returning new elements represented by the HTML.
		//
		//jQuery wraps DOM elements inside an instance of the jQuery object. Creating a jQuery instance does
		// not alter the DOM, but provides an interface to manipulate the selected DOM elements.
		//$(..)[0] === $(..).get(0);
		
		
		//Let's Query The DOM.
		//$('#container3').css('opacity', 1);
		//var uls = $('ul');
		//Trace this in debugger.
		//From debugger console try : uls[0].parentNode, uls[0].innerHTML

		//1. Let's set the first item of each list to bold.
		// jQuery accepts CSS selectors. Here we use the :first-child pseudo-class to match
		// a list item only if it is the first child of the parent. see sitepoint.com for more.
//	$('li:first-child').addClass('emphasis');
		
		//2. Let's look for immediate children.
//		var listOfStates = $('ul.states').children('li');
//		console.log(listOfStates);
		
		//Here is the same thing with a CSS selector.
//		var listOfCities = $('ul.cities > li');
//		console.log(listOfCities);
		
		//3. Not let's look at descendant selectors.
//		$('ul.states').children('li').css('color', 'green'); //direct children.
//		$('ul.states').find('li').css('color', 'green'); //all descendants.
		
		//4. Now let's move around the list.
		//First let's just use a CSS selector.
//		$('ul.states').children('li:nth-child(2)').addClass('error');
		
		//Now let's use a custom jQuery selector.
//		$('ul.states').children('li:first').addClass('error');
		//But if you have the choice between a CSS selector and a jQuery selector
		//use the CSS selector so you can take advantage of the browsers native parsers.
		
		//Here is another option using another jQuery method.
//		$('ul.states').children('li').first().addClass('loud');
		
		//Let's look at another jQuery method.
//	$('ul.states').children('li:nth-child(2)').text('added with jQuery');
		
		//Let's use the jQuery eq() method. (It's zero based).
//		$('ul.states').children('li').eq(2).text('eq method is zero based');
		
		//5. Because every jQuery method returns the jQuery object we can chain commands.
		//Chain chain chain...
		
//		$('ul.states').children('li').eq(2).next().text('chain chain chain...');
		
//		$('ul.states').children('li').eq(2).next()
//			.text('chain chain chain...')
//			.addClass('error');
		
//		$('ul.states').children('li:nth-child(2)')
//			.text('added with jQuery')
//			.addClass('error');
		
		//Of course if you can use a CSS selector that is best. But sometimes you need to use jQuery
		// when you have to compose the selector dynamically at runtime.
		
		//6. parent() and parents() and closest()
		//Let's visit api.jquery.com

		
		
		
		
		
		//Basic Event Handling
//		$('#container3').css('opacity', .2);
//		$('#container4').css('opacity', 1);
		
		
		/*
		$('#container4 button').on('click', function() {
			alert('a button was clicked');
		});
		*/
		
		
		//Don't jump into the DOM everytime we click a button.
		//var myEvents101Container = $("#container4");
		
		
		
		/*
		$('#container4 button').on('click', function() {
			//console.log(this); //this refers to the target of our event.
			
			//If we want access to jQuery's methods we need to wrap this.
			//console.log($(this));
			//this.text("changed"); //causes error
			
			//BEST PRACTICE - cache our query - don't make jQuery travers the DOM more than once 
			// for the same thing.
//			var $this = $(this);
//			var myEvents101Container = $("#container4");
//			
//			myEvents101Container.css("background", "yellow");
			
			//We have set HTML5 custom data attributes on both our buttons.
			//Note: when passing one parameter to the attr method is gets instead of sets.
//			var theBackgroundColor = $this.attr("data-color"); 
//			console.log(theBackgroundColor);
//			var theBackgroundColor = $this.data("color"); 
//			myEvents101Container.css("background", theBackgroundColor);
			
			//Now let's disable the button after we change the background color.
//			var buttonID = $this.attr('id');
//			$$(buttonID).disable();
//			var otherButtonID = $this.siblings('button').attr('id');
//			$$(otherButtonID).enable();
		});
		*/
		
		
		//Finished Product
		/*
		$('#container4 button').on('click', function() {
			var $this = $(this);
			var myEvents101Container = $("#container4");
			var theBackgroundColor = $this.attr("data-color"); 
			var theBackgroundColor = $this.data("color"); 
			myEvents101Container.css("background", theBackgroundColor);
			//Now let's disable the button after we change the background color.
			var buttonID = $this.attr('id');
			$$(buttonID).disable();
			var otherButtonID = $this.siblings('button').attr('id');
			$$(otherButtonID).enable();
		});	
		*/
		
		
		
		
		
		
		
		
		
		
		//Spiderman
		//http://eldelgado.deviantart.com/
		//$('#container3').css('opacity', .2);
		//$('#container4').css('opacity', .2);
		//$('#container5').css('opacity', 1);
		
		//First let's hide all the definition details.
		//var dd = $('dd');
		//dd.hide();
		
		//Ok let's hide all but the first one using the jQuery filter() method.
		// filter() will only pass along elements that match the filter.
		//dd.filter(':nth-child(n+4)').hide();
		
		//Let's show a definition description when the user hovers over a definition term.
		//So let's create an event handler for our the <dt> elements.
		/*
		$('dt').on('mouseenter', function() {
			//console.log(this);
			$this = $(this);
			$this.next().show();
			//Let's hide the other definition details 
			$this.next().siblings('dd').hide();
		});
		*/
		
		//Let's clean this up.
		/*
		$('dt').on('mouseenter', function() {
			$this = $(this);
			$this.next()
				.show()
				.siblings('dd').hide();
		});
		*/
		
		//Now let's add some animation.
		/*
		$('dt').on('mouseenter', function() {
			$this = $(this);
			$this.next()
				.slideDown(200)
				.siblings('dd').slideUp(200);
		});
		*/
		
		//We are attaching an event listener to every <dt>.
		// What if we had 100 definition terms.
		/*
		$('dl').on('mouseenter', 'dt', function() {
			$this = $(this);
			$this.next()
				.slideDown(300)
				.siblings('dd').slideUp(300);
		});
		*/
		
		
		
		
		//Example from TechBase.
//		$('#container5').css('opacity', .2);
//		$('#container6').css('opacity', 1);
		
		//Let's attach event handlers to all the text fields so they can listen for a keyup.
		/*
		$('#textField1, #textField2, #textField3, #textField4').on('keyup', function (e) {
	   		if ( e.keyCode == 13 ){
	   			alert("you hit return");
	    	}
		});
		*/
		
		
		//Instead of atttaching 4 event handlers we can attach on event handler to the parent
		// and use a filter to see if the event target is a text field.
		/*
		$('#container7').on('keyup', '#container7 input', function (e) {
	   		if ( e.keyCode == 13 ){
	   			alert("you hit return and the container told me to alert you.");
	    	}
		});
		*/
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
