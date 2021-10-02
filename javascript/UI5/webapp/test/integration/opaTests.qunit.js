QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/scholar/demo/test/integration/DemoJourney"
	], function () {
		QUnit.start();
	});
});