(function() {
	var app= angular.module("app");
	app.controller("searchCtrl", searchCtrl);
	
	//?apiKey=5178650f2fb747a1a4c48cf9b86bd154//
	
	function searchCtrl($scope,$http) {
		var API_KEY="?apiKey=5178650f2fb747a1a4c48cf9b86bd154";
		var URL="http://addb.absolutdrinks.com/drinks/";
        var QUERY="";
		$scope.searchDrinks="";
		$scope.title="search ctrl";
		$scope.getDrinks=function(){
		var promise = $http.jsonp( "http://addb.absolutdrinks.com/quickSearch/drinks/"+ $scope.searchDrinks +"/?apiKey=5178650f2fb747a1a4c48cf9b86bd154&callback=JSON_CALLBACK");
            promise.success(function(data){
                console.log("this is my data",data);
            });
		;
		promise.then(successCallback,failureCallback);
		
		function successCallback(result){
			console.log(result.data.result);
			$scope.drinks=result.data.result;
		
		}
		function failureCallback(result){
			console.log(result);
		}	
		};
	}
})();
