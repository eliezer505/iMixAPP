(function() {
  //Place your own Instagram client_id below. Go to https://instagram.com/developer/clients/manage/ and register your app to get a client IDd394cd92937246b88ab5e3d623cba583
   var client_id = 'd394cd92937246b88ab5e3d623cba583';

  //To get your user ID go to http://jelled.com/instagram/lookup-user-id and enter your Instagram user name to get your user ID
  var user_id = '54460550';

  //https://www.instagram.com/oauth/authorize/?client_id=64a12cb0db7b41da8cd2a8736770c466&redirect_uri=http://127.0.0.1:8080/test&response_type=token
   var access_token = '54460550.d394cd9.7d141fb47ca44cec87ecba93e4cf7704';

  var app = angular.module('instafeed', []);

  app.factory('InstagramAPI', ['$http', function($http) {
    return {
      fetchPhotos : function(callback) {
        var endpoint = 'https://api.instagram.com/v1/users/';
        endpoint += user_id;
        endpoint += '/media/recent/?';
        endpoint += '?count=99';
        endpoint += '&callback=JSON_CALLBACK';
        endpoint += '&access_token=' + access_token;
        $http.jsonp(endpoint)
        .success(function(response) {
          callback(response.data);
                  console.log(response.data)
        })
        .error(function(xhr, status, err) {
          console.error(status, err);
        })
      }
    }
  }]);

  app.controller('ShowImages', function($scope, InstagramAPI) {
    $scope.layout = 'grid';
    $scope.data = {};
    $scope.pics = [];

    InstagramAPI.fetchPhotos(function(data) {
      $scope.pics = data;
    });
  });

})();