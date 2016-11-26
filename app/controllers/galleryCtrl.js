


(function() {
	var app = angular.module("app");
	app.controller("galleryCtrl", galleryCtrl);

	//?apiKey=5178650f2fb747a1a4c48cf9b86bd154//

	function galleryCtrl($scope, $http, $routeParams) {

		var ID = "";
		$scope.init = "";
		$scope.title = "gallery ctrl";
		
		function init(){
			var promise = $http.get("http://www.thecocktaildb.com/api/json/v1/1425/random.php");
			promise.success(function(data) {
				console.log("CocktailDB data", data);


			});

			promise.then(successCallback, failureCallback);

			function successCallback(result) {


				$scope.pics = result.data.drinks['0'];
console.log(result.data.drinks['0'])

			}

			function failureCallback(result) {
				console.log(result);
		
			}
		
		};
		init();
	}
	

})();

