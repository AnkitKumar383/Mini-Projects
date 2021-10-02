sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
    "sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, Press, PropertyStrictEquals) {
	"use strict";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSortButton: function () {
					return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new PropertyStrictEquals({
                            name: "icon",
                            value: "sap-icon://sort"
                        }),
						actions: new Press(),
                        success: function(){
                            Opa5.assert.ok(true, "Was able to click on Sort button");
                        },
						errorMessage: "Did not find the sort button"
					});
				},
                iPressOnTheOkButtonOnSortDialog: function() {
                    return this.waitFor({
                        controlType: "sap.m.Button",
                        matchers: new PropertyStrictEquals({
                            name: "text",
                            value: "OK"
                        }),
                        actions: new Press(),
                        success: function(){
                            Opa5.assert.ok(true, "Was able to click on ok button in sort dialog");
                        },
                        errorMessage: "Was not able to click on ok button in sort dialog"
                    })
                },

                iPressOnTheColumnListItem: function(){
                    return this.waitFor({
                        controlType: "sap.m.ColumnListItem",
                        actions: new Press(),
                        success: function(){
                            Opa5.assert.ok(true, "Was able to click on a columnList item");
                        },
                        errorMessage: "Was not able to click on a columnList item"
                    })
                }
			},

			assertions: {
				iShouldSeeTheSortDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});