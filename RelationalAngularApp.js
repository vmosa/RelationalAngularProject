var app=angular.module('RelationalAngularApp',['MainAppServiceModule']);

app.controller('MainAppController',[ 
'$scope', 
'MainAppHttpService',
function( 
	$scope, MainAppHttpService){
		$scope.toDo='';
		var testUrl='https://bee1f3cf-4500-40a0-8cb4-0449b3c7d633.mock.pstmn.io/todos';
		var gtd=MainAppHttpService.getTodos(testUrl);
		gtd.then((response)=>{
			$scope.toDo=response.data;
		},(response)=>{
			console.error(response);
		}
	);
}]);
