sap.ui.define([
	"sap/scholar/demo/model/formatter",
], function (formatter) {
	"use strict";

	QUnit.module("Formatter qunits");

    //frequency text
    function getFormattedFrequency(frequency) {
        return formatter.getFormattedFrequency(frequency);
    }
	QUnit.test("Should return formatted frequency text", function (assert) {
		assert.strictEqual(getFormattedFrequency(null), "Not defined", "Formatting for null value is correct");
		assert.strictEqual(getFormattedFrequency("text"), "text", "Formatting for other values is correct");
	});

    function formatfrequencyState(frequency) {
        return formatter.formatfrequencyState(frequency);
    }
	QUnit.test("Should return formatted frequency state", function (assert) {
		assert.strictEqual(formatfrequencyState(444), sap.ui.core.ValueState.Error, "Formatting of state is correct for value < 500");
		assert.strictEqual(formatfrequencyState(510), sap.ui.core.ValueState.Warning, "Formatting of state is correct for value < 520");
        assert.strictEqual(formatfrequencyState(600), sap.ui.core.ValueState.Success, "Formatting of state is correct for value < 620");
        assert.strictEqual(formatfrequencyState(700), sap.ui.core.ValueState.None, "Formatting of state is correct for value > 620");
        assert.strictEqual(formatfrequencyState(null), sap.ui.core.ValueState.None, "Formatting of state is correct for value null");
	});

});