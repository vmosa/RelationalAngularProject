//var form=angular.module('RelationalAngularApp');
var form = angular.module('ProductInputForm',[]);

form.component('productInput', {
templateUrl:"productInputForm.template.html",
/*template: '<div>'+
'<form> Product Code: <input type="text" ng-model="$ctrl.data.productCode"/><br/>'+
'</form>{{$ctrl.data.productCode}}</div>',*/
controller: function ProductInputFormController(){
    this.data={};
    this.storageTypes=['sack', 'crate', 'bottle'];
    this.submitText="Create product entry";
    this.cancelText="Start over";

    }


});