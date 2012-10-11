
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
		hljs.initHighlighting();
		
		// Instantiate Reveal.js
		Reveal.initialize({
	      	controls: true,
	      	progress: true,
	      	history: true,
			transition: 'linear' // default/cube/page/concave/linear(2d)
			//theme: 'simple'
      		// Optional libraries used to extend on reveal.js
      	});
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
