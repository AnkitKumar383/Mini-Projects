QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/scholar/demo/test/unit/model/formatter"
	], function () {
		QUnit.start();
	});
});