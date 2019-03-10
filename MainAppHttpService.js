var masm=angular.module('MainAppServiceModule',[]);
masm.service('MainAppHttpService',['$http',
function($http){
    function getTodos(url){
        var res=$http.get(url);
        return res;
    }
    var MainAppHttpService={
        getTodos: getTodos
    };
    return MainAppHttpService;

}]);