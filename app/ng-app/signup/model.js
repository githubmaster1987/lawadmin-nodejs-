angular.module('lawAdmin.signup').factory('signupFactory', ['$http', function ($http) {

	var signupFactory = {};

	var apiUrl = '/';

	signupFactory.processSignup = function (user) {
		return $http.post(apiUrl + 'signup', user);
	};

	return signupFactory;
}]);
