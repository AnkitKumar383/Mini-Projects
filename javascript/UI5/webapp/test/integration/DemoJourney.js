sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/App"
], function () {
	"use strict";

	QUnit.module("Demo testing");

	opaTest("Should open the Sort dialog", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.scholar.demo"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSortButton();
		// // Assertions
		Then.onTheAppPage.iShouldSeeTheSortDialog();

        When.onTheAppPage.iPressOnTheOkButtonOnSortDialog();
		
		// Then.iTeardownMyApp();
	});

    opaTest("Should be able to navigate on click of first item", function (Given, When, Then) {
		When.onTheAppPage.iPressOnTheColumnListItem();

    	Then.iTeardownMyApp();
	});

});