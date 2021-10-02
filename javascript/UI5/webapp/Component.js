sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/resource/ResourceModel"
], function(UIComponent, ResourceModel) {
    'use strict';
    return UIComponent.extend("sap.scholar.demo.Component", {
        metadata : {
            manifest: "json"
        },
        init: function(){

            UIComponent.prototype.init.apply(this, arguments);

            // set i18n model
			var i18nModel = new ResourceModel({bundleName: "sap.scholar.demo.i18n.i18n"});
			this.setModel(i18nModel, "i18n");

            // initializing router
			this.getRouter().initialize();
        }
    })
});