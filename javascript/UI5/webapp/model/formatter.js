sap.ui.define([
], function () {
    //"use strict";
    return {
        getFormattedFrequency: function (frequency) {
            if (frequency) {
                return frequency;
            }
            return "Not defined";
        },
        formatfrequencyState: function(frequency){
            if(frequency){
                if(frequency < 500){
                    return sap.ui.core.ValueState.Error;
                } else if(frequency < 520){
                    return sap.ui.core.ValueState.Warning;
                } else if(frequency < 620){
                    return sap.ui.core.ValueState.Success;
                } else {
                    return sap.ui.core.ValueState.None;
                }
            } else {
                return sap.ui.core.ValueState.None;
            }
        }
    };
});