(function() {
	var app = angular.module("imdb")
	app.factory("message", message)

	function message() {
		
		return {
			print : function(text) {
				alert("hello " + text)
			}
		};
	}

})();

