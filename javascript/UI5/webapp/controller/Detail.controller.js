sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/scholar/demo/mockData/fakeServer",
    "sap/m/MessageBox",
    "sap/scholar/demo/model/formatter"
], function (Controller, JSONModel, myServer, MessageBox, formatter) {
    'use strict';

    return Controller.extend("sap.scholar.demo.controller.Detail", {
        formatter: formatter,
        onInit: function () {
            this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            this._oRouter.getRoute("detail").attachPatternMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(oEvent){
            var color =oEvent.getParameters().arguments.color;
            myServer.getColorByName(color)
                .then((result)=>{
                    var colorData = result;
                    var oModel = new JSONModel(colorData);
                    this.getView().setModel(oModel);
                }).catch((error)=>MessageBox.error(error));
            
        },

        onNavBack: function(){
            this._oRouter.navTo("home");
        }

    });
});