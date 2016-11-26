(function() {
	angular.module("app").config(route);

	function route($routeProvider) {
		$routeProvider.when('/about/', {
			templateUrl : 'app/view/search.html',
			controller : "searchCtrl"
			//template:"<h1>this is about page</h1>"

		}).when('/items/:id/:name', {
			templateUrl : 'app/view/drink.html',
			controller : "itemsCtrl"
			//template:"<h1>this is about page</h1>"


		}).when('/map/', {
			templateUrl : 'app/view/map.html',
controller : "mapCtrl"
		}).when('/gallery/', {
			templateUrl : 'app/view/gallery.html',
			controller : "galleryCtrl"
			//template:"<h1>this is about page</h1>"
		}).when('/learn/', {
			templateUrl : 'app/view/learn.html',
			controller : "learnCtrl"
			//template:"<h1>this is about page</h1>"


		}).when('/search/', {
			templateUrl : 'app/view/search.html',
			controller : "searchCtrl"
			//template:"<h1>this is about page</h1>"

		}).otherwise({
			redirectTo : '/about'
		});

	}

})();
