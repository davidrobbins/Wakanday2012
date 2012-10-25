
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var showButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		//Use jQuery to get reference to combobox element so we can fix display problem.
		//fix for combobox render bug where button get shoved
		// to the next line because input element grows by 2 px.
		var inputWidth = $('#fruitCombobox input').css('width');
		$('#fruitCombobox input').css('width', "-=2");
		
	};// @lock

	showButton.click = function showButton_click (event)// @startlock
	{// @endlock
		//Show comboboxContainer.
		$$('comboboxContainer').show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("showButton", "click", showButton.click, "WAF");
// @endregion
};// @endlock
