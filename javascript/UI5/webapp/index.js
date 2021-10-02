sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer) {
    'use strict';

    new ComponentContainer({
        name: "sap.scholar.demo",
        settings : {
			id : "demo"
		},
        async: true
    }).placeAt("content");
});