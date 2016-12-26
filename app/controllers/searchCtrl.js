(function() {
	var app = angular.module("app");
	app.controller("searchCtrl", searchCtrl);

	//?apiKey=5178650f2fb747a1a4c48cf9b86bd154//

	function searchCtrl($scope, $http, $timeout) {
		var API_KEY = "?apiKey=5178650f2fb747a1a4c48cf9b86bd154";
		var URL = "http://addb.absolutdrinks.com/drinks/";
		var QUERY = "";
		$scope.searchDrinks = "";
		$scope.nextp = 0
		$scope.title = "search ctrl";

		function initData() {

			
			var promise = $http.jsonp("http://addb.absolutdrinks.com/quickSearch/drinks/a?apiKey=5178650f2fb747a1a4c48cf9b86bd154&pageSize=100&callback=JSON_CALLBACK");
			promise.success(function(data) {
          	availableTags=data.result;
			 availableTags.map(function(item){
			 		console.log(item.name);
			 	return item.name;
			
			 
			 });
			 	
				$("#tags").autocomplete({
					source :  availableTags.map(function(item){
			 		console.log(item.name);
			 		
			 	return item.name;
			
			 
			 })
				});

			});
		}

		initData();

		$scope.getDrinks = function(nextp) {
			var promise = $http.jsonp("http://addb.absolutdrinks.com/quickSearch/drinks/" + $scope.searchDrinks + "/?apiKey=5178650f2fb747a1a4c48cf9b86bd154&start=" + nextp + "&pageSize=12&callback=JSON_CALLBACK");
			promise.success(function(data) {
				$scope.total = data.totalResult;
				console.log("this is my data", data);
				console.log("this is my data", data.result.videos);

			});

			promise.then(successCallback, failureCallback);

		};

		function getNumberAsArray(num) {
			return new Array(num);
		}

		function successCallback(result) {
			console.log(result.data.result);
			console.log(result.data.result.videos);

			$scope.drinks = result.data.result;
			$scope.videos = result.data.result.videos;
			console.log("amount", result.data.totalResult / 12)
			var number = parseInt(result.data.totalResult / 12)
			console.log("amount", number)
			$scope.amount = getNumberAsArray(number)

		}

		function failureCallback(result) {
			console.log(result);

		};

		$scope.next = function(skip) {
			console.log(skip)
			skip = skip * 12
			$scope.getDrinks(skip)

		}
	}

})();
