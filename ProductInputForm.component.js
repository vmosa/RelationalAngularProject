//var form=angular.module('RelationalAngularApp');
var form = angular.module('ProductInputForm',['sharedServiceModule']);

form.component('productInput', {
//templateUrl:"productInputForm.template.html",
template: '<div>'+
'<form ng-submit="$ctrl.submit($ctrl.data)"> Product Code: <input type="text" ng-model="$ctrl.data.productCode"/><br/>'+
'Product Description: <input type="text" ng-model="$ctrl.data.productDescription"/><br/>'+
'Quantity in stock: <input type="number" ng-model="$ctrl.data.quantity" min="1" max="99999"/><br/>'+
'<input type="submit" id="submit" value="submit"/>'+
'</form>{{$ctrl.data}}</div>'+
'Search for Product by ProductCode<input type="text" ng-model="$ctrl.searchByCode"/>'+
'<button ng-click="$ctrl.search($ctrl.searchByCode)">Search now</button>'+
'<ul><li ng-repeat="x in $ctrl.searchResultsList">Code: {{x.productCode}} Description: {{x.productDescription}}</li><ul>',
controller: ['sharedProductList',function ProductInputFormController(sharedProductList){
    this.data={};
	this.dataList=[];
	this.submit=(item)=>{
		//this.dataList.push(this.data);
		let copyData=JSON.parse(JSON.stringify(this.data)); //Object.assign({}, this.data);
		
		//sharedProductList.addProduct(this.data);
		sharedProductList.addProduct(copyData);
		
		this.dataList=sharedProductList.getProducts();
		console.log(this.dataList);
		this.data={};
	};
	this.searchByCode='';
	this.searchResultsList=[];
	this.search=(item)=>{
		this.searchResultsList=[];
		this.dataList=sharedProductList.getProducts();
		
		//console.log(this.dataList[0].productCode.contains('ssf'));
		
		for (let i=0; i<this.dataList.length; i++){
			let searchInString = this.dataList[i].productCode.indexOf(item)>-1
			if (searchInString){
				this.searchResultsList.push(this.dataList[i]);
			}
			
		}
	};
    }]


});