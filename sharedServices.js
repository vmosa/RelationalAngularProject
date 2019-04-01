var sharedServiceModule= angular.module('sharedServiceModule',[]);
sharedServiceModule.factory('sharedProductList',[()=>{

var productList=[];
var addProduct=(item)=>{
productList.push(item);
};
var getProducts=()=>{
return productList;
};
return {
addProduct: addProduct,
getProducts: getProducts
};

}]);
