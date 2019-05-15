//var form=angular.module('RelationalAngularApp');
var form = angular.module('ProductInputForm',['ngRoute']);
form.component('productInput', {
//templateUrl:"productInputForm.template.html",
template: `<div ng-class="$ctrl.containerClass" >
    <form > 
Product Code: <input type="text" ng-model="$ctrl.data.productCode"/><br/>
Product Name: <input type="text" ng-model="$ctrl.data.productName"  ng-change="$ctrl.checkValue()" /><br/>
Quantity in stock: <input type="number" ng-model="$ctrl.data.quantity"/><br/>
<div ng-if="$ctrl.check"> 
    Method of storage <select type="text" ng-model="$ctrl.data.storageType">
        <option  ng-repeat="x in $ctrl.storageTypes" ng-value="{{x}}">{{x}}</option>
    </select>
</div>
<input type="submit" ng-value="$ctrl.submitText" />
<input type="reset" ng-value="$ctrl.cancelText" ng-click="$ctrl.resetForm()"/>
</form>
<span ng-if="ctrl.data.productCode!=null">{{$ctrl.data.productCode}}
</div>`,
controller: ['$route','$scope', function($route,$scope){
    this.data={};
    this.storageTypes=['sack', 'crate', 'bottle'];
    this.submitText="Create product entry";
    this.cancelText="Start over";
	this.containerClass+='text-secondary';
	this.containerClass+='badge';
	this.check=false;
	
	
	
	this.resetForm=()=>{
		//this.data=[];
		//this.check=this.checkValue();
		$route.reload();
	};
	this.checkValue=()=>{
		return this.check=this.data.productName=='fish';
	}
	
	}]});
