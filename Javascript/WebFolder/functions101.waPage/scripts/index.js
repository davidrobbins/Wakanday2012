
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		//Save Button - We will use an anonymous function here.
		waf.sources.company.save({
			onSuccess: function(ev) {
				$$("message").setValue("Company " + ev.dataSource.name + " updated on server.");
			},
			onError: function(error) {
				$$("message").setValue(error['error'][0].message + " (" + error['error'][0].errCode + ")");
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
// @endregion
};// @endlock
