sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/scholar/demo/mockData/fakeServer",
    "sap/m/MessageBox",
    "sap/scholar/demo/model/formatter"
], function(Controller, JSONModel, Sorter, Filter, FilterOperator, myServer, MessageBox, formatter) {
    'use strict';

    return Controller.extend("sap.scholar.demo.controller.Home", {
        formatter: formatter,
        onInit : function() {
          //fetching data
          myServer.getColors()
            .then((result)=>{
              var oData = result;
              var oModel = new JSONModel(oData);
              this.getView().setModel(oModel, "data");
            })
            .catch((error)=>{
              MessageBox.error(error);
            });

          //on home route matched
          this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          this._oRouter.getRoute("home").attachPatternMatched(this._onRouteMatched, this);
        },
        _onRouteMatched: function(){
          this._table = this.getView().byId("colorsTable");
        },
        //on navigation to color detail page
        onNavigation: function(oEvent){
          var colorName = oEvent.getSource().getCells()[0].getText();
          this._oRouter.navTo("detail",{
            color: colorName
          });
        },

        //sorting
        handleSortButtonPressed: function(){
          if (!this._oSortDialog) {
            this._oSortDialog = sap.ui.xmlfragment("sap.scholar.demo.fragments.SortDialog", this);
            this.getView().addDependent(this._oSortDialog);
          }
          this._oSortDialog.open();
        },
        handleSortDialogConfirm: function(oEvent){
          var aSorters=[];
          var tableBinding = this._table.getBinding("items");
          var params = oEvent.getParameters();
          var key = params.sortItem.getKey();
          var isDescending = params.sortDescending;
          aSorters.push(new Sorter(key, isDescending));
          tableBinding.sort(aSorters);
        },

        //grouping
        handleGroupButtonPressed: function(){
          if (!this._oGroupDialog) {
            this._oGroupDialog = sap.ui.xmlfragment("sap.scholar.demo.fragments.GroupDialog", this);
            this.getView().addDependent(this._oGroupDialog);
          }
          this._oGroupDialog.open();
        },
        handleGroupDialogConfirm: function(oEvent){
          var aGroups=[];
          var tableBinding = this._table.getBinding("items");
          var params = oEvent.getParameters();
          if(params.groupItem){
            var key = params.groupItem.getKey();
            var isDescending = params.groupDescending;
            aGroups.push(new Sorter(key, isDescending, true));
            tableBinding.sort(aGroups);
          } else {
            tableBinding.sort();
          }
        },

        //searching and filtering
        onFilterColors: function(oEvent){
          var aFilter=[];
          var tableBinding = this._table.getBinding("items");
          var sQuery= oEvent.getParameter("query");
          if(sQuery){
            aFilter.push(new Filter("color", FilterOperator.Contains, sQuery));
          }

          // var aFilter = new Filter(
          //   [
          //     new Filter("color", FilterOperator.Contains, sQuery),
          //     new Filter("type", FilterOperator.Contains, sQuery)
          //   ]
          //   ,false
          // );
          tableBinding.filter(aFilter);
        }

    });

});