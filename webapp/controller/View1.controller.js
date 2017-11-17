sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("seidorzfiori_curso.controller.View1", {

		
	onInit:function(){
		
		this.getView().setModel(new sap.ui.model.json.JSONModel());
		this.getView().getModel().setProperty("/modelCall", new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZGW100_IGD_SO_SRV",true));
		
		
		var that = this;
		this.getView().getModel().getProperty("/modelCall").read("/SalesOrderCollection", null, null, false,
		function _OnSuccess(oData) {
					that.getView().getModel().setProperty("/salesOrder", oData.results);
					//console.log(oData);
		},
		function _OnError(error) {
			//		console.log(error);
					//error
				}
		);
	
	
	//	console.log(this.getView().getModel());
	}



	});
});