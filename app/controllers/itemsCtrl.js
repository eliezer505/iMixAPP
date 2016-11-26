(function() {
	var app = angular.module("app");
	app.controller("itemsCtrl", itemsCtrl);

	//?apiKey=5178650f2fb747a1a4c48cf9b86bd154//

	function itemsCtrl($scope, $http, $routeParams) {
		var API_KEY = "?apiKey=5178650f2fb747a1a4c48cf9b86bd154";
		var URL = "http://addb.absolutdrinks.com/drinks/";
		var QUERY = "";
		var ID = "";
		$scope.name = $routeParams.name;
		$scope.id = $routeParams.id;
		$scope.searchDrinks = "";
		$scope.title = "items ctrl";
		
		function init(){
			var promise = $http.jsonp("http://addb.absolutdrinks.com/quickSearch/drinks/" + $routeParams.name + "/?apiKey=5178650f2fb747a1a4c48cf9b86bd154&callback=JSON_CALLBACK");
			promise.success(function(data) {
				console.log("this is my second data", data);
				console.log("this is my data", data.result.videos);

			});

			promise.then(successCallback, failureCallback);

			function successCallback(result) {
				console.log(result.data.result);
				console.log(result.data.result.videos);
				$scope.drinks = result.data.result;
				$scope.videos = result.data.result.videos;

			}

			function failureCallback(result) {
				console.log(result);
			}
		}
		$scope.getDrinks = function() {
			var promise = $http.jsonp("http://addb.absolutdrinks.com/drinks/" + $routeParams + "/?apiKey=5178650f2fb747a1a4c48cf9b86bd154&callback=JSON_CALLBACK");
			promise.success(function(data) {
				console.log("this is sss data", data);
				console.log("this is my data", data.result.videos);

			});

			promise.then(successCallback, failureCallback);

			function successCallback(result) {
				console.log(result.data.result);
				console.log(result.data.result.videos);
				$scope.drinks = result.data.result;
				$scope.videos = result.data.result.videos;

			}

			function failureCallback(result) {
				console.log(result);
			}

		};
		init();
	}

})();

