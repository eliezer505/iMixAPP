(function() {
	var app= angular.module("app");
	app.controller("mapCtrl", mapCtrl);

	//?apiKey=5178650f2fb747a1a4c48cf9b86bd154//
	
	function mapCtrl($scope,$http) {
		var API_KEY="?apiKey=5178650f2fb747a1a4c48cf9b86bd154";
		var URL="http://addb.absolutdrinks.com/drinks/";
        var QUERY="";
		$scope.searchDrinks="";
		$scope.title="search ctrl";
		$scope.getDrinks=function(){
		var promise = $http.jsonp( "http://addb.absolutdrinks.com/illhaveones/incountry/"+ $scope.searchDrinks + "/?apiKey=5178650f2fb747a1a4c48cf9b86bd154&pageSize=10&callback=JSON_CALLBACK");
            promise.success(function(data){
                console.log("this is my data",data);
                 console.log("this is my data",data.result.videos);
                
            });
		;
		promise.then(successCallback,failureCallback);
		
		function successCallback(result){
			console.log(result.data.result);
			console.log(result.data.result.videos);
			$scope.drinks=result.data.result;
			$scope.videos=result.data.result.videos;
		
		}
		function failureCallback(result){
			console.log(result);
		}	
		};

	}




})();
